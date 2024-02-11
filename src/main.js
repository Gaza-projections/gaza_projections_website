// Splide core styles
import '@splidejs/splide/css/core';
import './index.css';
import Splide from '@splidejs/splide';
import { Accordion } from './accordion';

document.addEventListener('DOMContentLoaded', () => {
  new Splide('.js-carousel').mount();

  // init accordions
  const accordions = document.querySelectorAll('.js-accordion .js-accordion-title');
  accordions.forEach((accordionEl) => {
    new Accordion(accordionEl);
  });
});
