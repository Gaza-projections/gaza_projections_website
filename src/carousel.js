export function addCarouselEventListeners(carouselSelector) {
  const carousel = document.querySelector(carouselSelector);

  if (!carousel) {
    throw new Error(`No carousel found for selector: ${carouselSelector}`);
  }

  const prevButton = carousel.querySelector('.js-prev');
  const nextButton = carousel.querySelector('.js-next');
  const slidesWrapper = carousel.querySelector('.js-slides-wrapper');
  const indicators = carousel.querySelectorAll('.js-indicator');

  const slideWidth = slidesWrapper.clientWidth;
  const slidesCount = slidesWrapper.children.length;
  let index = 0;

  const showCurrentCarouselSlide = () => {
    slidesWrapper.style.transform = `translateX(-${index * slideWidth}px)`;

    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add('bg-primary');
        indicator.classList.remove('bg-[#C4C4C4]');
      } else {
        indicator.classList.add('bg-[#C4C4C4]');
        indicator.classList.remove('bg-primary');
      }
    });
  };

  nextButton.addEventListener('click', () => {
    index = (index + 1) % slidesCount;
    showCurrentCarouselSlide();
  });

  prevButton.addEventListener('click', () => {
    index = index - 1 < 0 ? slidesCount - 1 : index - 1;
    showCurrentCarouselSlide();
  });

  slidesWrapper.appendChild;
}
