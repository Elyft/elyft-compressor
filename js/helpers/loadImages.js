export function loadImages(imagesPath){
  return new Promise((resolve)=>{
    // handleAllCheckIfImageLoadedOrNot(...imagesPaths);
    checkIfImageLoadedOrNot(imagePath);
  })
 //  return Promise.all(arrayOfImagesPath.map(checkIfImageLoadedOrNot)).then(function(values) {
 //  console.log(values);
 // });
};
function checkIfImageLoadedOrNot(imagePath){
   return new Promise((resolve)=>{
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

function handleAllCheckIfImageLoadedOrNot(...imagesPaths){
  return Promise.all(imagesPaths.map(checkIfImageLoadedOrNot)).then((values)=>{
    console.log(values);
  })
}
