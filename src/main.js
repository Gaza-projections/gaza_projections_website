// Splide core styles
import '@splidejs/splide/css/core';
import './index.css';
import Splide from '@splidejs/splide';
import { Accordion } from './accordion';
import { initSectionObserver } from './section-observer';

document.addEventListener('DOMContentLoaded', () => {
  new Splide('.js-carousel').mount();

  // init accordions
  const accordions = document.querySelectorAll('.js-accordion .js-accordion-title');
  accordions.forEach((accordionEl) => {
    new Accordion(accordionEl);
  });

  const navAccordion = new Accordion(document.querySelector('.js-nav'));

  // Close nav accordion (on mobile) when a link is clicked
  document.getElementById('nav-list').addEventListener('click', () => {
    navAccordion.close();
  });

  // Updates URL based on section
  initSectionObserver();
});
