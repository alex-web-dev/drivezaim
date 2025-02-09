import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const $aboutBoxes = document.querySelectorAll(".about");
$aboutBoxes.forEach(($about) => {
  const $slider = document.querySelector(".about__slider");

  const $prev = $about?.querySelector(".about-btn-prev");
  const $next = $about?.querySelector(".about-btn-next");
  const $pagination = $about?.querySelector(".about__slider-pagination");

  new Swiper($slider, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 12,
    speed: 500,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
    pagination: {
      clickable: true,
      el: $pagination,
    },
  });
});
