
import {downloadManager} from '../helpers/downloadManager.js';
import {animateSlide} from '../helpers/animateSlide.js';
export function thirdViewSlide(arrayFileAndExtension){
 console.log(arrayFileAndExtension);
 document.getElementById("third-view").onclick = (e)=>{
   if(e.target !== e.currentTarget){
     const targetId = e.target.id;
     if(targetId === "download-image"){
       downloadManager(arrayFileAndExtension,e.target);
     }else if(targetId === "back-to-start"){
       animateSlide(document.getElementById('flex-box-contain'),'-100%')
     }
   }
 };
}
