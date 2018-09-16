export function carroussel(domNode){
 "use strict";
 let i = 2;
 setInterval(()=>{
  requestAnimationFrame(()=>{
   if(i === 2){
    domNode[2].style.opacity = 0;
    i--;
   }else if(i === 1){
    domNode[1].style.opacity = 0;
    i--;
   }else if(i === 0){
    domNode[0].style.opacity = 0;
    domNode[2].style.opacity = 1;
    domNode[1].style.opacity = 1;
    domNode[0].style.opacity = 1;
    i = 2;
   }
  });
 },10000);
}