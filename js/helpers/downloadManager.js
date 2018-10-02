export function downloadManager(arrayFileAndExtension){
  return new Promise((resolve)=>{
   // This file name is not really random but for our needs it is more than enough
   let randomFileName = Math.random().toString(36).substring(1);
       randomFileName = `${btoa(randomFileName)}.${arrayFileAndExtension[1]}`;
   const fileUrl = window.URL.createObjectURL(arrayFileAndExtension[0]);
   const downloadOptions = {
     filename:randomFileName,
     url:fileUrl,
     conflictAction : 'uniquify'
   };
   function handleChanged(delta) {
    if (delta.state && delta.state.current === "complete") {
      resolve("download completed");
    }
   }
   browser.downloads.download(options);
   browser.downloads.onChanged.addListener(handleChanged);
  });
}
