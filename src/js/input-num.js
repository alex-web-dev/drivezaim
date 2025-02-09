import noUiSlider from "nouislider";
import { extractNumber } from "./helpers";

const $priceFilters = document.querySelectorAll(".input-num");
$priceFilters.forEach(($filter) => {
  const $slider = $filter.querySelector(".input-num__slider");
  const data = {
    min: +$slider.dataset.min || 1,
    max: +$slider.dataset.max || 100,
    startMin: +$slider.dataset.startMin || 1,
    startMax: +$slider.dataset.startMax,
    step: +$slider.dataset.step || 1,
    maxPercent: +$slider.dataset.maxPercent,
    minLabel: $slider.dataset.minLabel ?? "",
    maxLabel: $slider.dataset.maxLabel ?? "",
  };

  const sliderStart = [];
  if (data.startMin) sliderStart.push(data.startMin);
  if (data.startMax) sliderStart.push(data.startMax);

  noUiSlider.create($slider, {
    start: sliderStart,
    connect: sliderStart.length === 1 ? "lower" : true,
    step: data.step,
    range: {
      min: data.min,
      max: data.max,
    },
    format: {
      from: (value) => Math.round(value),
      to: (value) => Math.round(value),
    },
  });

  const $value = $filter.querySelector(".input-num__value");
  $value?.addEventListener("blur", () => {
    $slider.noUiSlider.set(extractNumber($value.value));
  });

  $slider.noUiSlider.on("update", (values) => {
    const minValue = `${data.minLabel} ${values[0]}`.trim();

    if ($value) {
      $value.imask ? ($value.imask.value = minValue) : ($value.value = minValue);
    }
  });
});
