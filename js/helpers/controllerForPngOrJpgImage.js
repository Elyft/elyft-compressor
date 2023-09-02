import {snackbar} from '../widgets/snackbar.js';
export function controllerForPngOrJpgImage(extensionName,domClicked){
  // Something may change here in the near future
  let message = `Your image will be automatically convert to ${domClicked} image.`;
  snackbar(document.getElementById('body'),'icons/info.svg',message,2000);
}
