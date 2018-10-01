export function animateSlide(domToAnim,percentToTranslate){
  return new Promise((resolve)=>{
    requestAnimationFrame(()=>{
      domToAnim.style.transform = `translate3d(${percentToTranslate},0,0)`;
      domToAnim.addEventListener("transitionend",()=>{
        resolve("Animation terminée");
      });
    },domToAnim);
  })
}
