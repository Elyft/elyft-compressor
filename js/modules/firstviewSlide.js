import {animateSlide} from '../helpers/animateSlide.js';
export function firstViewSlide(){
	document.getElementById('go-to-second-slide').onclick = ()=>{
      animateSlide(document.getElementById('flex-box-contain'),'-100%');
	},{passive:true};
}
