import { images } from "./slides";

const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
// const sliderWrapper = document.querySelector(".slider-wrapper");
const slide = document.querySelector(".page-slider");
let width;
let currentSlideIndex = 0;
const TIMEOUT = 5000;

// console.log(images);

export function initSlides(images) {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  for (let i = 0; i < images.length; i++) {
    const slideLi = document.createElement("li");
    slideLi.className = "slide";
    if (i === currentSlideIndex) {
      slideLi.style.display = "inline-block";
    }
    const slideImg = document.createElement("img");
    slideImg.src = images[i].default;
    slideImg.alt = `img${i}`;
    slideLi.append(slideImg);
    sliderWrapper.append(slideLi);
  }
}

function clearSlides() {
  const sliderWrapper = document.querySelector(".slider-wrapper");
  for (let i = 0; i < sliderWrapper.children.length; i++) {
    sliderWrapper.children[i].style.display = "none";
  }
}

export function showSlide(images) {
  if (currentSlideIndex > images.length - 1) {
    throw new Error("illegal argument exception");
  }
  const sliderWrapper = document.querySelector(".slider-wrapper");
  clearSlides();
  sliderWrapper.children[currentSlideIndex].style.display = "inline-block";
  sliderWrapper.style.transform = "translate(-" + sliderWrapper * width + "px)";
}

function showSlideAuto(images) {
  currentSlideIndex += 1;
  if (currentSlideIndex > images.length - 1) {
    currentSlideIndex = 0;
  }
  showSlide(images);
}

function startShowSlides(images) {
  return setInterval(() => showSlideAuto(images), TIMEOUT);
}

export function initListeners(images) {
  if (prev) {
    prev.addEventListener("click", () => {
      currentSlideIndex -= 1;
      if (currentSlideIndex < 0) {
        currentSlideIndex = images.length - 1;
      }
      showSlide(images);
    });
  }

  if (next) {
    next.addEventListener("click", () => {
      currentSlideIndex += 1;
      if (currentSlideIndex > images.length - 1) {
        currentSlideIndex = 0;
      }
      showSlide(images);
    });
  }
  if (slide) {
    let startSlideShow = startShowSlides(images);
    slide.onmouseenter = () => {
      if (startSlideShow) {
        clearInterval(startSlideShow);
      }
    };
    slide.onmouseleave = () => {
      startSlideShow = startShowSlides(images);
    };
  }
}
