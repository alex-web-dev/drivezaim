import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const $stepsBoxes = document.querySelectorAll(".steps");
$stepsBoxes.forEach(($steps) => {
  const $section = $steps.closest(".section");
  const $slider = document.querySelector(".steps__slider");

  const $prev = $section?.querySelector(".steps-btn-prev");
  const $next = $section?.querySelector(".steps-btn-next");

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
        slidesPerView: 3,
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
