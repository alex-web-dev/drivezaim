import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const $loanItemsBoxes = document.querySelectorAll(".loan-items");
$loanItemsBoxes.forEach(($loanItems) => {
  const $section = $loanItems.closest(".section");
  const $slider = document.querySelector(".loan-items__slider");
  const $prev = $section?.querySelector(".loan-items-btn-prev");
  const $next = $section?.querySelector(".loan-items-btn-next");

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
      992: {
        slidesOffsetBefore: 100,
        slidesPerView: "auto",
      },
      768: {
        slidesPerView: "auto",
      },
    },
  });
});
