import "./styles/style.scss";
import "./mobile.js";
import "./slider.js";
import { images } from "./slides";
import { initListeners, initSlides, showSlide } from "./slider";
initSlides(images);
initListeners(images);
showSlide(images);
