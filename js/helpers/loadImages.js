export function loadImages(...arrayOfImagesPath){
  const checkIfImageLoadedOrNot = (imagePath)=>{
    new Promise((resolve)=>{
      const img = new Image();
      img.src = imagePath;
      img.onload = ()=>{
        if(img.complete === true){
          console.log("loaded");
          resolve({imagePath, status:'fully loaded'});
        }else{
          resolve({imagePath, status:'not completelyloaded'});
        }
      };
      img.onerror = () => {
        console.log("error");
        resolve({imagePath, status: 'error'});
      }
   });
  }
  return Promise.all(arrayOfImagesPath.map(checkIfImageLoadedOrNot)).then(function(values) {
  console.log(values);
 });
}
