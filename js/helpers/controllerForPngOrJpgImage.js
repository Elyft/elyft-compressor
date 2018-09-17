import {snackbar} from '../widgets/snackbar.js';
export function controllerForPngOrJpgImage(extensionName,domClicked){
  let message;
  if(domClicked === extensionName){
    message = `The image that you have selected is already a ${extensionName} image.`;
  }else{
    message = `Your image will be automatically convert to ${domClicked} image.`;
  }
  snackbar(document.getElementById('body'),'icons/info.svg',message,5000);
}
