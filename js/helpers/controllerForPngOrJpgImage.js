import {snackbar} from '../widgets/snackbar.js';
export function controllerForPngOrJpgImage(extensionName){
  snackbar(document.getElementById('body'),'icons/info.svg',`Your image will be automatically convert to ${extensionName} image`,5000);
}
