import {
  initSlides,
  showSlide,
  startShowSlides,
  initListeners,
  showSlideAuto,
} from "./slider";

beforeEach(() => {
  global.window.document.body.innerHTML = `<div class="slider">
        <ul class="slider-wrapper"></ul>
        <div class="slider-counter">
        <div class="slider-prev">&#10094;</div>
    <div class="slider-next">&#10095;</div>`;
});
const images = [
  {
    default: "1.jpg",
  },
  {
    default: "2.jpg",
  },
];

describe("function initSlides", () => {
  it("check that initSlides is true", function () {
    initSlides(images);
    expect(typeof initSlides).toBe("function");
    expect(initSlides).toBeTruthy();
  });
});

describe("function startShowSlides", () => {
  it("when startShowSlides is called", function () {
    initSlides(images);
    showSlide(images);
    showSlideAuto(images);
    expect(typeof showSlideAuto).toBe("function");
    expect(showSlideAuto).not.toBeNull();
  });
});

describe("function showSlide", () => {
  it("when calling a function display inline-block", function () {
    initSlides(images);
    const sliderWrapper = document.querySelector(".slider-wrapper");
    let currentSlideIndex = 1;
    showSlide(images);
    expect(sliderWrapper.children[currentSlideIndex].style.display).toEqual(
      "inline-block"
    );
  });
});

describe("function initListeners", () => {
  it("check the buttons work next and prev", function () {
    const prev = document.querySelector(".slider-prev");
    const next = document.querySelector(".slider-next");
    initListeners(images);
    expect(prev.dispatchEvent(new Event("click"))).toBeTruthy();
    expect(next.dispatchEvent(new Event("click"))).toBeTruthy();
  });
});
jest.useFakeTimers();
describe("function startShowSlides", () => {
  it("does the function survive setInterval", function () {
    startShowSlides(images);
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 5000);
  });
});
