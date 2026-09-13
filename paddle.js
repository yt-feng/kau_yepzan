(() => {
  const config = window.TIKTALK_PADDLE || {};
  const messages = {
    en: {
      pending: 'Paddle checkout will be enabled after the course and price are configured.',
      ready: 'Paddle checkout is ready for this course.',
      unavailable: 'Paddle is not available in this browser session. Please send an inquiry instead.',
      error: 'Paddle could not be initialized yet. Please send an inquiry instead.'
    },
    zh: {
      pending: '课程和价格配置完成后，Paddle 支付会在这里开启。',
      ready: '该课程已准备好使用 Paddle 结账。',
      unavailable: '当前浏览器暂时无法加载 Paddle，请先发送咨询。',
      error: 'Paddle 暂时无法初始化，请先发送咨询。'
    },
    ar: {
      pending: 'سيتم تفعيل الدفع عبر Paddle بعد إعداد الدورة والسعر.',
      ready: 'الدفع عبر Paddle جاهز لهذه الدورة.',
      unavailable: 'لا يتوفر Paddle في جلسة المتصفح الحالية. يرجى إرسال استفسار.',
      error: 'تعذر تهيئة Paddle الآن. يرجى إرسال استفسار.'
    }
  };

  const getMessage = (key) => (messages[document.documentElement.lang] || messages.en)[key];
  const getPriceId = (key) => String(config.priceIds?.[key] || '').trim();
  const hasConfig = (key) => Boolean(window.Paddle && config.clientToken && getPriceId(key));
  const select = () => document.getElementById('productSelect');
  const button = () => document.getElementById('paddleCheckoutButton');
  const status = () => document.getElementById('paddleStatus');

  function sync(key = select()?.value) {
    const checkoutButton = button();
    const statusNode = status();
    const ready = hasConfig(key);
    if (checkoutButton) {
      checkoutButton.classList.toggle('is-disabled', !ready);
      checkoutButton.setAttribute('aria-disabled', String(!ready));
      checkoutButton.disabled = !ready;
      checkoutButton.dataset.product = key || '';
    }
    if (statusNode && !statusNode.dataset.runtimeState) statusNode.textContent = ready ? getMessage('ready') : getMessage('pending');
    return ready;
  }

  function openCheckout(key) {
    if (!hasConfig(key)) {
      const statusNode = status();
      if (statusNode) statusNode.textContent = window.Paddle ? getMessage('pending') : getMessage('unavailable');
      return;
    }
    window.Paddle.Checkout.open({
      items: [{priceId: getPriceId(key), quantity: 1}]
    });
  }

  function initialize() {
    const checkoutButton = button();
    const productSelect = select();
    if (!checkoutButton || !productSelect) return;

    productSelect.addEventListener('change', () => sync(productSelect.value));
    checkoutButton.addEventListener('click', (event) => {
      event.preventDefault();
      if (!hasConfig(productSelect.value)) return sync(productSelect.value);
      openCheckout(productSelect.value);
    });

    if (!window.Paddle || !config.clientToken) return sync(productSelect.value);
    try {
      if (config.environment === 'sandbox') window.Paddle.Environment.set('sandbox');
      window.Paddle.Initialize({token: config.clientToken});
      sync(productSelect.value);
    } catch (error) {
      checkoutButton.classList.add('is-disabled');
      checkoutButton.setAttribute('aria-disabled', 'true');
      checkoutButton.disabled = true;
      const statusNode = status();
      if (statusNode) {
        statusNode.dataset.runtimeState = 'error';
        statusNode.textContent = getMessage('error');
      }
      console.warn('Paddle initialization failed', error);
    }
  }

  window.tiktalkPaddle = {sync, openCheckout};
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize);
  else initialize();
})();
