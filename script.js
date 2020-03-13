const MENU = document.getElementById("menu");
const sliderLeft = document.getElementById("sliderLeft");
const sliderRight = document.getElementById("sliderRight");
const SLIDER = document.getElementById("slider");
const slide1 = document.getElementById("slide1");
const img = document.createElement("img");
const blackVertical = document.getElementById("blackVertical");
const blackHorisont = document.getElementById("blackHorisont");
const imgVertical = document.getElementById("imgVertical");
const imgHorizontal = document.getElementById("imgHorizontal");

let countClickArrow = 1;
let countVerticalPhone = 1;
let countHorizontalPhone = 1;
img.setAttribute("src", "./assets/img_singolo1/Slider.png");

//header navigation
MENU.addEventListener("click", event => {
  MENU.querySelectorAll("li>a").forEach(el => el.classList.remove("active"));
  event.target.classList.add("active");
});
//slider
sliderLeft.addEventListener("click", event => {
  countClickArrow++;
  countClickArrow % 2 !== 0 ? img.replaceWith(slide1) : slide1.replaceWith(img);
});
sliderRight.addEventListener("click", event => {
  countClickArrow++;
  countClickArrow % 2 !== 0 ? img.replaceWith(slide1) : slide1.replaceWith(img);
});
//black screen
imgVertical.addEventListener("click", event => {
  countVerticalPhone++;
  countVerticalPhone % 2 !== 0
    ? (blackVertical.style.display = "none")
    : (blackVertical.style.display = "inline-block");
});
imgHorizontal.addEventListener("click", event => {
  countHorizontalPhone++;
  countHorizontalPhone % 2 !== 0
    ? (blackHorisont.style.display = "none")
    : (blackHorisont.style.display = "inline-block");
});
blackVertical.addEventListener("click", event => {
  countVerticalPhone++;
  countVerticalPhone % 2 !== 0
    ? (blackVertical.style.display = "none")
    : (blackVertical.style.display = "inline-block");
});
blackHorisont.addEventListener("click", event => {
  countHorizontalPhone++;
  countHorizontalPhone % 2 !== 0
    ? (blackHorisont.style.display = "none")
    : (blackHorisont.style.display = "inline-block");
});
