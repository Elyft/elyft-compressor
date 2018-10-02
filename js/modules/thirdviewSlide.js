
import {downloadManager} from '../helpers/downloadManager.js';
import {animateSlide} from '../helpers/animateSlide.js';
export function thirdViewSlide(arrayFileAndExtension){
 document.getElementById("third-view").onclick = (e)=>{
   e.preventDefault();
   if(e.target !== e.currentTarget){
     console.log(e.target.href);
     console.log(e.target.download);
     const targetId = e.target.id;
     if(targetId === "download-image"){
       const downloadPicture = downloadManager(arrayFileAndExtension);
             downloadPicture.then((responseDownloadManager)=>{
               console.log(responseDownloadManager);
             }).catch((error)=>{
               console.log(error);
             });
     }else if(targetId === "back-to-start"){
       animateSlide(document.getElementById('flex-box-contain'),'0%')
     }else{
       return false;
     }
   }
 };
}
