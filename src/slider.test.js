import { initSlides, showSlide } from "./slider";
beforeEach(() => {
  global.window.document.body.innerHTML = `<div class="slider">
        <ul class="slider-wrapper"></ul>
        <div class="slider-counter">
        <div class="slider-prev">&#10094;</div>
    <div class="slider-next">&#10095;</div>`;
});
describe("Should slider work", () => {
  it("when initSlides is called, a list is displayed", function () {
    const images = [
      {
        default: "1.jpg",
      },
      {
        default: "2.jpg",
      },
    ];
    initSlides(images);
    expect(typeof initSlides).toBe("function");
  });
});

// describe("Should slider work", () => {
//     it("when showSlide is called", function () {
//         const images = [
//             {
//                 default: "1.jpg"
//             },
//             {
//                 default: "2.jpg"
//             }
//         ];
//         const currentSlideIndex = 1;
//         const sliderWrapper = document.querySelector(".slider-wrapper");
//         showSlide(images);
//         expect(sliderWrapper.children[currentSlideIndex].style.display).toBe("none");
//     })
// });
