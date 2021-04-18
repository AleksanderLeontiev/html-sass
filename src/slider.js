export class Slider {
  currentSlideIndex;
  width;

  constructor(selector) {
    this.slides = document.querySelector(selector);
    this.next = document.querySelector(".slider-next");
    this.currentSlideIndex = 0;
    this.prev = document.querySelector(".slider-prev");

    if (this.prev) {
      this.prev.addEventListener("click", this.prevShowSlide.bind(this));
    }
    if (this.next) {
      this.next.addEventListener("click", this.nextShowSlide.bind(this));
    }
  }

  initSlides(images) {
    this.images = images;
    for (let i = 0; i < images.length; i++) {
      const slideLi = document.createElement("li");
      slideLi.className = "slide";
      if (i === this.currentSlideIndex) {
        slideLi.style.display = "inline-block";
      }
      const slideImg = document.createElement("img");
      slideImg.src = images[i].default;
      slideImg.alt = `img${i}`;
      slideLi.appendChild(slideImg);
      this.slides.appendChild(slideLi);
    }
  }

  prevShowSlide() {
    this.currentSlideIndex -= 1;
    if (this.currentSlideIndex < 0) {
      this.currentSlideIndex = this.images.length - 1;
    }
    this.showSlides();
  }

  nextShowSlide() {
    this.currentSlideIndex += 1;
    if (this.currentSlideIndex >= this.images.length) {
      this.currentSlideIndex = 0;
    }
    this.showSlides();
  }

  showSlides() {
    this.clearSlides();
    this.slides.children[this.currentSlideIndex].style.display = "inline-block";
  }

  clearSlides() {
    for (let i = 0; i < this.slides.children.length; i++) {
      this.slides.children[i].style.display = "none";
    }
  }
}
