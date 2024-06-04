// Splide core styles
import '@splidejs/splide/css/core';
import './index.css';
// import Splide from '@splidejs/splide';
import { Accordion } from './accordion';
import { setupMenu } from './menu';
import { setupAnalyticsEvents } from './analytics';
import { setupCookieBanner } from './cookie-banner';

document.addEventListener('DOMContentLoaded', () => {
  // new Splide('.js-carousel').mount();

  // Init accordions
  const accordions = document.querySelectorAll('.js-accordion .js-accordion-title');
  accordions.forEach((accordionEl) => {
    new Accordion(accordionEl);
  });

  // Set up the main menu for mobile and other screens
  setupMenu();
  setupCookieBanner();

  if (window.CONFIG.isGoogleAnalyticsEnabled) {
    setupAnalyticsEvents();
  }
});
