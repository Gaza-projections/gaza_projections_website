// Splide core styles
import '@splidejs/splide/css/core';
import './index.css';
import Splide from '@splidejs/splide';

document.addEventListener('DOMContentLoaded', () => {
  const splide = new Splide('.js-carousel');
  splide.mount();
});
