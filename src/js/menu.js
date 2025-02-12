const $hasChildrenItems = document.querySelectorAll(".menu__item--has-children");
$hasChildrenItems.forEach(($item) => {
  const $link = $item.querySelector(".menu__link");

  $link.addEventListener("click", () => {
    $item.classList.toggle("menu__item--active");
  });
});

window.addEventListener("click", (e) => {
  const $activeItem = document.querySelector(".menu__item--active");
  const isInner = e.target.closest(".menu__item") && !e.target.classList.contains("menu__item");
  const isOpenPopupBtn = e.target.closest(".js-open-popup");

  if (!isOpenPopupBtn && (!$activeItem || isInner)) {
    return;
  }

  $activeItem?.classList.remove("menu__item--active");
});
