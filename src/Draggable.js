import React from "react";
import classes from "./Draggable.module.css";

function Draggable({ children }) {
  const targetRef = React.useRef(null)
  React.useEffect(()=>{
    console.dir(targetRef.current.classList[0]) 
  })
  const mouseDown = (e) => {
    const [curLeft,curTop] = [targetRef.current.offsetLeft,targetRef.current.offsetTop]
    const [startX,startY] = [e.clientX,e.clientY]
    const [clientWidth,clientHeight] = [targetRef.current.clientWidth,targetRef.current.clientHeight]
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    
    const mouseMove = (e) => {  
        targetRef.current.style.opacity= "0.7"
        let nextOffsetX = curLeft + e.clientX-startX 
        let nextOffsetY = curTop + e.clientY-startY 
        
        if(nextOffsetX < 0){
          nextOffsetX = 0
        }
        else if(nextOffsetX+clientWidth > viewportWidth){
          nextOffsetX = viewportWidth-clientWidth
        }
        if(nextOffsetY < 0) {
          nextOffsetY = 0
        }
        else if(nextOffsetY + clientHeight > viewportHeight) {
          nextOffsetY = viewportHeight-clientHeight
        }
        targetRef.current.style.left = `${nextOffsetX}px`
        targetRef.current.style.top = `${nextOffsetY}px`
      
    };

    const mouseUp = (e) => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);
      targetRef.current.style.opacity= "1"
      
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);
  };

  return (
    <div
      id="target"
      ref = {targetRef}
      className={classes.container}
      onMouseDown={mouseDown}
    ></div>
  );
}

export default Draggable;
