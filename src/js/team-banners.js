import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const $teamBannersBoxes = document.querySelectorAll(".team-banners");
$teamBannersBoxes.forEach(($teamBanners) => {
  const $slider = document.querySelector(".team-banners__slider");
  const $prev = $teamBanners?.querySelector(".team-banners-btn-prev");
  const $next = $teamBanners?.querySelector(".team-banners-btn-next");

  new Swiper($slider, {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 12,
    speed: 550,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
    breakpoints: {
      768: {
        speed: 750,
      }
    }
  });
});
