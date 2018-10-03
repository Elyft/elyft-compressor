import {carroussel} from './widgets/carroussel.js';
import {loadImages} from './helpers/loadImages.js';
import {firstViewSlide} from './modules/firstviewSlide.js';
import {openAndCloseRoadMap} from './helpers/openAndCloseRoadMap.js';
document.addEventListener("DOMContentLoaded", () =>{
  "use strict";
  loadImages(...['img/bg1.jpg','img/bg2.jpg','img/bg3.jpg'])
  .then((response)=>{
     if(response === "All Images are loaded"){
       const carrousselElements = document.querySelectorAll(".carroussel-elements");
             carrousselElements.forEach((element)=>{
               element.classList.remove("hide");
             });
       carroussel(carrousselElements);
     }
  }).catch((error)=>{
    console.log(error);
  })
  firstViewSlide();
  openAndCloseRoadMap();
},{passive:true,capture:false});
