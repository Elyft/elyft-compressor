import {animateSlide} from '../helpers/animateSlide.js';
import {secondViewSlide} from './secondviewSlide.js';
export function firstViewSlide(){
	document.getElementById('go-to-second-slide').onclick = ()=>{
      const animateSlide = animateSlide(document.getElementById('flex-box-contain'),'-100%');
			      animateSlide.then((responseAnimation)=>{
							if(responseAnimation === "Animation terminée"){
								secondViewSlide();
							}
						}).catch((error)=>{
							console.log(error);
						});

	},{passive:true};
}
