export function setupCookieBanner() {
  let banner = document.querySelector('.js-cookie-banner');

  if (checkCookieConsent()) {
    hideBanner(banner);
  }

  document.querySelector('.js-cookie-accept-button').addEventListener('click', () => {
    setCookieConsent();
    banner.style.bottom = '-100%';
    setTimeout(function () {
      hideBanner(banner);
    }, 700);
  });
}

function checkCookieConsent() {
  return document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent='));
}

function setCookieConsent() {
  let date = new Date();
  date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
  const expires = date.toUTCString();
  document.cookie = `cookieConsent=true; expires=${expires}`;
}

function hideBanner(banner) {
  banner.style.display = 'none';
  banner.ariaHidden = true;
}