import {snackbar} from '../widgets/snackbar.js';
export function controllerForPngOrJpgImage(extensionName,domClicked){
  // Something may change here in the near future
  let message;
  // if(domClicked === extensionName){
  //   message = `The image that you have selected is already a ${extensionName} image.`;
  // }else{
    message = `Your image will be automatically convert to ${domClicked} image.`;
  // }
  snackbar(document.getElementById('body'),'icons/info.svg',message,2000);
}
