import { images } from "./slides";
import { Slider } from "./slider.js";
export const slider = new Slider(".slider-wrapper");
slider.initSlides(images);
slider.showSlides();
import "./styles/style.scss";
import "./mobile.js";
