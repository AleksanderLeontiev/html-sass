import { initSlides } from "./slider";

describe("Should slider work", () => {
  window.document.body.innerHTML = `<div class="slider">
        <ul class="slider-wrapper"></ul>
        <div class="slider-counter">
        <div class="slider-prev">&#10094;</div>
    <div class="slider-next">&#10095;</div>`;
});
const prev = document.querySelector(".slider-prev");
const next = document.querySelector(".slider-next");
it("when initSlides is called, a list is displayed", function () {
  const img = ["1", "2", "3"];

  expect(initSlides(img[0])).toBe("1");
});
