import { images } from "./slides";
// const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
const sliderWrapper = document.querySelector(".slider-wrapper");
const slider = document.querySelector(".slider");
let width;
let currentSlideIndex = 0;

function initWidth() {
  console.log("resize");
  width = document.querySelector(".slider-wrapper").offsetWidth;
  console.log(width);
  sliderWrapper.style.size = width * images.length + "rem";
  for (let i = 0; i < images.length; i++) {
    sliderWrapper.style.size = width + "rem";
    sliderWrapper.style.height = "auto";
  }
}
initWidth();
window.addEventListener("resize", initWidth);

function initSlides(images) {
  for (let i = 0; i < images.length; i++) {
    const slideDiv = document.createElement("li");
    slideDiv.className = "slide";
    if (i === currentSlideIndex) {
      slideDiv.style.display = "flex";
    }
    const slideImg = document.createElement("img");
    slideImg.src = images[i].default;
    slideImg.alt = `img${i}`;
    slideDiv.appendChild(slideImg);
    sliderWrapper.appendChild(slideDiv);
  }
}

initSlides(images);

function clearSlides() {
  for (let i = 0; i < sliderWrapper.children.length; i++) {
    sliderWrapper.children[i].style.display = "none";
  }
}
function showSlide() {
  if (currentSlideIndex > images.length - 1) {
    throw new Error("illegal argument exception");
  }
  clearSlides();
  sliderWrapper.children[currentSlideIndex].style.display = "flex";
  sliderWrapper.style.transform = "translate(-" + sliderWrapper * width + "px)";
}

if (prev !== null) {
  prev.addEventListener("click", () => {
    currentSlideIndex -= 1;
    if (currentSlideIndex < 0) {
      currentSlideIndex = images.length - 1;
    }
    showSlide();
  });
}

if (next !== null) {
  next.addEventListener("click", () => {
    currentSlideIndex += 1;
    if (currentSlideIndex > images.length - 1) {
      currentSlideIndex = 0;
    }
    showSlide();
  });
}
function showSlideAuto() {
  currentSlideIndex += 1;
  if (currentSlideIndex > images.length - 1) {
    currentSlideIndex = 0;
  }
  showSlide();
  console.log("hi");
}

sliderWrapper.addEventListener(
  "transitionend",
  function () {
    // get the last element and append it to the front
    if (currentSlideIndex === 0) {
      sliderWrapper.prepend(sliderWrapper.lastElementChild);
    } else {
      sliderWrapper.appendChild(sliderWrapper.firstElementChild);
    }
    sliderWrapper.style.transition = "none";
    sliderWrapper.style.transform = "translate(0)";
    setTimeout(() => {
      sliderWrapper.style.transition = "all ease 2s;";
    });
  },
  false
);
// setInterval(()=>showSlideAuto(), 3000);

document
  .querySelector(".slider-wrapper")
  .addEventListener("mouseover", function (event) {
    console.log("g");
  });
