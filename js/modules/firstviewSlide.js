import {animateSlide} from '../helpers/animateSlide.js';
import {secondViewSlide} from './secondviewSlide.js';
export function firstViewSlide(){
	document.getElementById('go-to-second-slide').onclick = ()=>{
      const animation = animateSlide(document.getElementById('flex-box-contain'),'-100%');
			      animation.then((responseAnimation)=>{
							if(responseAnimation === "Animation terminée"){
								secondViewSlide();
							}
						}).catch((error)=>{
							console.log(error);
						});

	},{passive:true};
}
