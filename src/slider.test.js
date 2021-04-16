import { Slider } from "./slider";
const img = [
  {
    default: "1.jpg",
  },
  {
    default: "2.jpg",
  },
];
describe("Should slider work", () => {
  beforeEach(() => {
    global.window.document.body.innerHTML = `<div class="slider">
        <ul class="slider-wrapper"></ul>
        <div class="slider-counter">
        <div class="slider-prev">&#10094;</div>
    <div class="slider-next">&#10095;</div>`;
  });

  it("check slider type", () => {
    const slider = new Slider(".slider-wrapper");
    expect(slider).toBeInstanceOf(Slider);
    expect(slider).toBeTruthy();
    expect(typeof Slider).toBe("function");
    expect(typeof slider).toBe("object");
  });
  it("check buttons", () => {
    const slider = new Slider(".slider-wrapper");
    slider.initSlides(img);
    expect(slider.currentSlideIndex).toBe(0);
    slider.nextShowSlide();
    expect(slider.currentSlideIndex).toBe(1);
    slider.prevShowSlide();
    expect(slider.currentSlideIndex).toBe(0);
  });
  it("check that showSlides returns inline-block", () => {
    const currentSlideIndex = 0;
    const slider = new Slider(".slider-wrapper");
    slider.initSlides(img);
    slider.showSlides();
    expect(slider.slides.children[currentSlideIndex].style.display).toBe(
      "inline-block"
    );
  });
  it("check that showSlides returns none", () => {
    const slider = new Slider(".slider-wrapper");
    slider.initSlides(img);
    const currentSlideIndex = 1;
    slider.clearSlides();
    expect(slider.slides.children[currentSlideIndex].style.display).toBe(
      "none"
    );
  });
});
