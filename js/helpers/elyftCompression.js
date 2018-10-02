import {ElyftCompressor} from '../vendors/elyft-hermite-compressor-core.js';
export function elyftCompression(pictureToCompress,newPictureExtension){
	console.log(pictureToCompress)
	return new Promise((resolve)=>{
	const ElyftCompress = new ElyftCompressor();
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img_w = pictureToCompress.width;
  const img_h = pictureToCompress.height;
  // On prepare notre canvas a accueillir l'image puis on dessine l'image
  canvas.width = img_w;
  canvas.height = img_h;
  ctx.clearRect(0,0,img_w,img_h);
  ctx.drawImage(pictureToCompress, 0, 0);
	// At this point we can choose to resize with the percent number
  const w =  Math.round(img_w * 100 / 100);
  const h =  Math.round(img_h * 100 / 100);
  function finish(){
     canvas.toBlob((blob)=>{
     resolve([blob,newPictureExtension]);
     },`image/${newPictureExtension}`, 0.8);
 }
 ElyftCompress.resample(canvas, w, h, true, finish);
 });
}
