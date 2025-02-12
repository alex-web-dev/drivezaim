const $circlesProgress = document.querySelectorAll(".progress-circle");
$circlesProgress.forEach(($circleProgress) => {
  const C = 282;
  const percent = +$circleProgress.dataset.percent;
  const $filled = $circleProgress.querySelector(".progress-circle__line--filled");
  $filled.style.strokeDashoffset = `calc(${C} - (${C} * ${percent}) / 100)`;
});
