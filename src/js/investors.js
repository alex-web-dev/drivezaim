import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const $loanItemsBoxes = document.querySelectorAll(".investors");
$loanItemsBoxes.forEach(($loanItems) => {
  const $section = $loanItems.closest(".section");
  const $slider = document.querySelector(".investors__slider");
  const $prev = $section?.querySelector(".investors-btn-prev");
  const $next = $section?.querySelector(".investors-btn-next");

  new Swiper($slider, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 12,
    initialSlide: 1,
    speed: 600,
    slidesOffsetBefore: 0,
    loop: true,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
    breakpoints: {
      1280: {
        slidesOffsetBefore: 88,
        slidesPerView: 'auto',
      },
      1180: {
        slidesOffsetBefore: 64,
        slidesPerView: 'auto',
      },
    },
  });
});
