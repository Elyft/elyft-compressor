export function loadImages(...imagesPaths){
  return new Promise((resolve)=>{
    function checkIfImageLoadedOrNot(imagePath){
       return new Promise((resolve)=>{
         const img = new Image();
         img.src = imagePath;
         img.onload = ()=>{
           if(img.complete === true){
             // For Debugging purposes
             resolve({imagePath, status:'fully loaded'});
           }else{
             // For Debugging purposes
             resolve({imagePath, status:'not completelyloaded'});
           }
         };
         img.onerror = () => {
           // For Debugging purposes
           resolve({imagePath, status: 'error'});
         }
       });
    }

    function handleAllCheckIfImageLoadedOrNot(...imagesPaths){
      return Promise.all(imagesPaths.map(checkIfImageLoadedOrNot)).then((values)=>{
        resolve("All Images are loaded");
      });
    }
    handleAllCheckIfImageLoadedOrNot(...imagesPaths);
  });
}
