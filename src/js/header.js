const $header = document.querySelector(".header");
if ($header) {
  const $top = $header.querySelector(".header__top");
  const $mobileMenu = $header.querySelector(".header__mobile-menu");

  window.addEventListener("load", () => {
    scrollHandler($header, $top, $mobileMenu);
    window.addEventListener("scroll", () => scrollHandler($header, $top, $mobileMenu));
  });
}

function scrollHandler($header, $top, $mobileMenu) {
  if (window.scrollY >= 20 && !$header.classList.contains("header--scroll")) {
    $header.classList.add("header--scroll");
    $header.style.transform = `translateY(-${$top.offsetHeight}px)`;
    $mobileMenu.style.transform = `translateY(${$top.offsetHeight}px)`;
  } else if (window.scrollY < 20 && $header.classList.contains("header--scroll")) {
    $header.classList.remove("header--scroll");
    $header.style.transform = "translateY(0)";
    $mobileMenu.style.transform = "translateY(0)";
  }
}
