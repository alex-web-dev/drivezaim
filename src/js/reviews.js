import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const $reviewsBoxes = document.querySelectorAll(".reviews");
$reviewsBoxes.forEach(($reviews) => {
  const $section = $reviews.closest(".section");
  const $slider = document.querySelector(".reviews__slider");

  const $prev = $section?.querySelector(".reviews-btn-prev");
  const $next = $section?.querySelector(".reviews-btn-next");


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
        slidesPerView: 2
      },
      481: {
        slidesPerView: 1.5
      }
    }
  });
});
