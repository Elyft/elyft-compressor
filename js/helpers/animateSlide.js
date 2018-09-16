export function animateSlide(domToAnim,percentToTranslate){
  return requestAnimationFrame(()=>{
    domToAnim.style.transform = `translate3d(${percentToTranslate},0,0)`;
  },domToAnim);
}
