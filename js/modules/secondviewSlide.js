import {animateSlide} from '../helpers/animateSlide.js';
import {drawAnOverview} from '../helpers/drawAnOverview.js';
import {elyftCompression} from '../helpers/elyftCompression.js';
import {snackbar} from '../widgets/snackbar.js';
import {controllerForPngOrJpgImage} from '../helpers/controllerForPngOrJpgImage.js';
import {thirdViewSlide} from './thirdviewSlide.js';
export function secondViewSlide(){
	// When filled the pictureFeatures will be an array
	let pictureFeatures;
	let pictureExtensionSelected;
	document.getElementById('second-view').onclick = (e)=>{
		if(e.target !== e.currentTarget){
			const targetId = e.target.id;
			if(targetId === "start-compression"){
				if(pictureFeatures !== undefined){
					snackbar(document.getElementById('body'),'icons/info.svg',"D&eacute;but de la compr&eacute;ssion",2500);
					const _elyftCompression = elyftCompression(pictureFeatures[0],pictureExtensionSelected);
								_elyftCompression.then((responsePictureCompression)=>{
                   const animation = animateSlide(document.getElementById('flex-box-contain'),'-200%');
												 animation.then((responseAnimation)=>{
						 							if(responseAnimation === "Animation terminée"){
						 								thirdViewSlide();
						 							}
						 						 }).catch((error)=>{
						 							console.log(error);
						 						 });
								 }).catch((error)=>{
									 console.log(error);
								});
				}else{
					snackbar(document.getElementById('body'),'icons/info.svg',"Please choose a picture first",5000);
				}
			}else if(["png", "jpg", "jpeg"].includes(targetId) === true){
        if(pictureFeatures !== undefined){
					controllerForPngOrJpgImage(pictureFeatures[1],targetId);
					pictureExtensionSelected = targetId;
				}
			}
		}else{
			return false;
		}
	},{passive:true};

 document.getElementById('select-file').onchange = function(){
	 const pictureToCompress = this.files;
	 const _drawAnOverView = drawAnOverview(pictureToCompress);
	       _drawAnOverView.then((responseDrawAnOverview)=>{
					 // console.log(responseDrawAnOverview);
             if(responseDrawAnOverview === "Bad extension use jpg,jpeg or png"){
                snackbar(document.getElementById('body'),'icons/info.svg',responseDrawAnOverview,5000);
             }else{
		            const area_img_selected = document.getElementById('area-img-selected');
					      requestAnimationFrame(()=>{
							     area_img_selected.innerHTML = null;
							     area_img_selected.style.backgroundImage = `url(${responseDrawAnOverview[0].src})`;
									 pictureFeatures = [responseDrawAnOverview[0],responseDrawAnOverview[1]];
			          });
            }
		  }).catch((error)=>{
			console.log(error);
		  });

 },{passive:true};
}
