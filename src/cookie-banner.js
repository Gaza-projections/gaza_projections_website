export function setupCookieBanner() {
  let banner = document.getElementById('cookie-banner');

  if (checkCookieConsent()) {
    hideBanner();
  }

  document.getElementById('cookie-accept-button').addEventListener('click', () => {
    setCookieConsent();
    banner.style.bottom = '-100%';
    setTimeout(function () {
      hideBanner();
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

function hideBanner() {
  banner.style.display = 'none';
  banner.ariaHidden = true;
}