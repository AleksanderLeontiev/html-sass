import { images } from "./slides";
const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
const sliderWrapper = document.querySelector(".slider-wrapper");
const slide = document.querySelector(".page-slider");
let width;
let currentSlideIndex = 0;
const TIMEOUT = 5000;
console.log(images);
export function initSlides(images) {
  for (let i = 0; i < images.length; i++) {
    const slideLi = document.createElement("li");
    slideLi.className = "slide";
    if (i === currentSlideIndex) {
      slideLi.style.display = "inline-block";
    }
    const slideImg = document.createElement("img");
    slideImg.src = images[i].default;
    slideImg.alt = `img${i}`;
    slideLi.appendChild(slideImg);
    sliderWrapper.appendChild(slideLi);
  }
}

initSlides(images);

export function clearSlides() {
  for (let i = 0; i < sliderWrapper.children.length; i++) {
    sliderWrapper.children[i].style.display = "none";
  }
}

function showSlide() {
  if (currentSlideIndex > images.length - 1) {
    throw new Error("illegal argument exception");
  }
  clearSlides();
  sliderWrapper.children[currentSlideIndex].style.display = "inline-block";
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

function startShowSlides() {
  return setInterval(() => showSlideAuto(), TIMEOUT);
}

let startSlideShow = startShowSlides();
slide.onmouseenter = () => {
  console.log("входит");
  if (startSlideShow) {
    clearInterval(startSlideShow);
  }
};

slide.onmouseleave = () => {
  console.log("и выходит");
  startSlideShow = startShowSlides();
};
