export function getThePictureExtension(picture){
  let pictureExtension = picture[0].name.split(".");
      pictureExtension = pictureExtension.pop().trim().toLowerCase();
  return pictureExtension;
}
