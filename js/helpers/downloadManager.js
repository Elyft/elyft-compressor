export function downloadManager(arrayFileAndExtension){
  return new Promise((resolve)=>{
   // This file name is not really random but for our needs it is more than enough
   let randomFileName = Math.random().toString(36).substring(1);
       randomFileName = `${btoa(randomFileName)}.${arrayFileAndExtension[1]}`;
   const fileUrl = window.URL.createObjectURL(arrayFileAndExtension[0]);
   window.location.assign(fileUrl);
}
