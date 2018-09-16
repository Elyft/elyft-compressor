import {animateSlide} from '../helpers/animateSlide.js';
import {drawAnOverview} from '../helpers/drawAnOverview.js';
import {elyftCompression} from '../helpers/elyftCompression.js';
import {snackbar} from '../widgets/snackbar.js';
import {controllerForPngOrJpgImage} from '../helpers/controllerForPngOrJpgImage.js';
import {getThePictureExtension} from '../helpers/getThePictureExtension.js';
export function secondViewSlide(){
	let imageToCompress;
	document.getElementById('second-view').onclick = (e)=>{
		if(e.target !== e.currentTarget){
			const targetId = e.target.id;
			if(targetId === "start-compression"){
				if(imageToCompress !== undefined){
					const _elyftCompression = elyftCompression(imageToCompress);
								_elyftCompression.then((responsePictureCompression)=>{

								 }).catch((error)=>{
									 console.log(error);
								});
				}else{
					snackbar(document.getElementById('body'),'icons/info.svg',"Please choose a picture first",5000);
				}
			}else if(["png", "jpg-or-jpeg"].includes(targetId) === true){
        if(imageToCompress !== undefined){
					controllerForPngOrJpgImage(imageToCompress,getThePictureExtension(imageToCompress));
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
             if(responseDrawAnOverview === "Bad extension use jpg,jpeg or png"){
                snackbar(document.getElementById('body'),'icons/info.svg',responseDrawAnOverview,5000);
             }else{
		            const area_img_selected = document.getElementById('area-img-selected');
					      requestAnimationFrame(()=>{
							     area_img_selected.innerHTML = null;
							     area_img_selected.style.backgroundImage = `url(${responseDrawAnOverview.src})`;
									 imageToCompress = responseDrawAnOverview;
									 console.log(imageToCompress);
			          });
            }
		  }).catch((error)=>{
			console.log(error);
		  });

 },{passive:true};
}
