export function openAndCloseRoadMap(){
  let isOpen = false;
  document.getElementById("button-to-open-roadmap").onclick = ()=>{
    const roadmap = document.getElementById("roadmap");
    requestAnimationFrame(()=>{
      if(isOpen === false){
        roadmap.style.transform = "translate3d(0,0,0)";
        isOpen = true;
      }else{
        roadmap.style.transform = "translate3d(-350px,0,0)";
        isOpen = false;
      }
    });
    }
  }
