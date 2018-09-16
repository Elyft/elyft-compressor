import {carroussel} from './widgets/carroussel.js';
import {loadImages} from './helpers/loadImages.js';
import {firstViewSlide} from './modules/firstviewSlide.js';
import {secondViewSlide} from './modules/secondviewSlide.js';
// import {thirdViewSlide} from './modules/thirdviewslide.js';
document.addEventListener("DOMContentLoaded", () =>{
  "use strict";
  loadImages("https://elyft.github.io/elyft-compressor/img/bg1.jpg");
  // carroussel(document.querySelectorAll(".carroussel-elements"));
  firstViewSlide();
  secondViewSlide();
},{passive:true,capture:false});
