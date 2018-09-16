export function loadImages(...imagesPaths){
  return new Promise((resolve)=>{
    // handleAllCheckIfImageLoadedOrNot(...imagesPaths);
    function checkIfImageLoadedOrNot(imagePath);
  })
 //  return Promise.all(arrayOfImagesPath.map(checkIfImageLoadedOrNot)).then(function(values) {
 //  console.log(values);
 // });
};
function checkIfImageLoadedOrNot("https://elyft.github.io/elyft-compressor/img/bg1.jpg"){
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
