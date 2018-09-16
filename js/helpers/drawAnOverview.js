export function drawAnOverview(pictureForTheOverview){
  return new Promise((resolve)=>{
    // For now i just want to handle this 3 extensions
    const allowedExtensions = ['jpg','jpeg','png'];
    let pictureExtension = pictureForTheOverview[0].name.split(".");
        pictureExtension = pictureExtension.pop().trim().toLowerCase();
    if(allowedExtensions.includes(pictureExtension) === true){
      const thumbnail = new Image();
      const thumbnailUrl = URL.createObjectURL(pictureForTheOverview[0]);
            thumbnail.src = thumbnailUrl;
            thumbnail.onload = ()=>{
              if(thumbnail.complete === true){
                resolve(thumbnail);
                // URL.revokeObjectURL(thumbnailUrl);
              }
            },{passive:true};
    }else{
      // Right There we send a message with bad extension type
      resolve('Bad extension use jpg,jpeg or png');
    }
  });
}
