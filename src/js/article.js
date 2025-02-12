const $article = document.querySelector(".article");
if ($article) {
  const $nav = $article.querySelector('.article__nav');
  const $navLinks = $nav.querySelectorAll('.article-nav__link');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          $navLinks.forEach(($link) => {
            const $item = $link.closest('.article-nav__item');
            const href = $link.getAttribute("href").replace("#", "");
            if (entry.target.id && href === entry.target.id) {
              $link.classList.remove("text--grey");
              $item.classList.add('article-nav__item--active');
            } else {
              $link.classList.add("text--grey");
              $item.classList.remove('article-nav__item--active');
            }
          });
        }
      });
    },
    {
      threshold: 0,
      rootMargin: "-50px 0px -80% 0px",
    }
  );

  const $text = $article.querySelector(".article__text");
  const $titles = $text.querySelectorAll("h1, h2, h3, h4, h5, h6");

  $titles.forEach(($section) => {
    observer.observe($section);
  });
}
