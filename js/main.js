const sliderWrapper = document.querySelector(".slider .wrapper");
const prevBtn = document.querySelector(".controls .prev");
const nextBtn = document.querySelector(".controls .next");

let i = 0;
prevBtn.addEventListener("click", () => {
  i++;
  if (i === 4) i = 0;
  sliderWrapper.style.marginRight = `-${i * 270}px`;
});

nextBtn.addEventListener("click", () => {
  i--;
  if (i < 0) i = 3;
  sliderWrapper.style.marginRight = `-${i * 270}px`;
});
