# elyft-compressor
Javascript library for compress and change images extension

## Context
Developers have always had to work with images in their web and mobile applications, if it is possible for them to compress images with online tools, it is not easy for them to compress images dynamically, for example when a user uploads a photo.
Elyft Compressor was created to solve this problem and allow developpers to compress images right on the users devices.
Elyft Compressor is surprisingly fast and agnostic, it can be integrated into any existing javascript project.

Note that, change the image extension maybe in certains cases increase the resulting image size, it's not the normal behaviour expected so use this with caution.

## How to install
1. Go to the folder js/vendors and copy the file <strong> elyft-hermite-compressor-core.js </strong> inside your own vendors project folder.
2. Go to the folder js/helpers and copy the file <strong> elyftCompression.js </strong> inside your own vendors project folder.
NB: Note that inside your elyftCompression.js file you have to change the first line to ```import {ElyftCompressor} from './elyft-hermite-compressor-core.js' ```;

## How it's works
In the head of your javascript file where you want to use elyft compressor you have to import the library like that
``` import {elyftCompression} from '../vendors/elyftCompression.js' ```
Somewhere inside your code you have to write this:
```javascript
 elyftCompression(picture[0],pictureExtension).then((responseCompression)=>{
    // picture[0] is the photo that the user uploaded on your website via an input type file
    // pictureExtension is the desire image output extension.By default it's jpeg(it will be a good thing if you let it like that)
       console.log(responseCompression);
    // responseCompression is an array which contain the compressed image in blob form(you can send it to your server like that)
    // and the new image extension if you provide one, 
    // Otherwise it will be an jpeg image
    // if you want to do something with the compressed image you can extract her to in memory temporary url like that
    const imageUrl = window.URL.createObjectURL(responseCompression[0]);
    // Doing some work with the image url
    // And after that free up memory
    URL.revokeObjectURL(imageUrl);
    
 })catch((error)=>{
   console.log(error);
 });
```
You can use [Async/Await](https://javascript.info/async-await) if you want, it's on your discretion.

## Author
<strong>Nguetseng Stephane</strong>
<strong>Tel:</strong> +237697644414
