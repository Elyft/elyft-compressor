import {carroussel} from './widgets/carroussel.js';
import {loadImages} from './helpers/loadImages.js';
import {firstViewSlide} from './modules/firstviewSlide.js';
import {secondViewSlide} from './modules/secondviewSlide.js';
// import {thirdViewSlide} from './modules/thirdviewslide.js';
document.addEventListener("DOMContentLoaded", () =>{
  "use strict";
  loadImages(...['img/bg1.jpg','img/bg2.jpg','img/bg3.jpg'])
  .then((response)=>{
     if(response === "All Images are loaded"){
       const carrousselElements = document.querySelectorAll(".carroussel-elements");
       console.log(carrousselElements);
             carrousselElements.classList.remove("hide");
       carroussel(carrousselElements);
     }
  }).catch((error)=>{
    console.log(error);
  })
  firstViewSlide();
  secondViewSlide();
},{passive:true,capture:false});
