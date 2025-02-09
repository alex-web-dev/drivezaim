const $header = document.querySelector(".header");
if ($header) {
  const $top = $header.querySelector(".header__top");
  const $content = $header.querySelector(".header__content");

  window.addEventListener("load", () => {
    scrollHandler($header, $top, $content);
    window.addEventListener("scroll", () => scrollHandler($header, $top, $content));
  });
}

function scrollHandler($header, $top, $content) {
  if (window.scrollY >= 20 && !$header.classList.contains("header--scroll")) {
    $header.classList.add("header--scroll");
    $content.style.transform = `translateY(-${$top.offsetHeight}px)`;
  } else if (window.scrollY < 20 && $header.classList.contains("header--scroll")) {
    $header.classList.remove("header--scroll");
    $content.style.transform = "translateY(0)";
  }
}
