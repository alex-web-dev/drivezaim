import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const $featuresBoxes = document.querySelectorAll(".features");
$featuresBoxes.forEach(($features) => {
  const $section = $features.closest(".section");
  const $slider = document.querySelector(".features__slider");

  const $prev = $section?.querySelector(".features-btn-prev");
  const $next = $section?.querySelector(".features-btn-next");

  new Swiper($slider, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 12,
    speed: 500,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
    breakpoints: {
      1081: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      481: {
        slidesPerView: 1.5,
      },
    },
  });
});
