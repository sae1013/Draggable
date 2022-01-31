import React from "react";
import classes from "./Draggable.module.css";

function Draggable({ children }) {
  const targetRef = React.useRef(null)
  const mouseDown = (e) => {
    const [startX,startY] = [e.clientX,e.clientY]
    const mouseMove = (e) => {
      // Do something in Move (a.k.a drag we think)
      
      // targetRef.current.style.left = `${e.clientX - e.target.clientWidth/2}px`
      
      if (e.target.id === "target") {
        console.log(e.clientX-startX)
        targetRef.current.style.opacity= "0.7"
        targetRef.current.style.left = `${e.clientX-startX}px`
        targetRef.current.style.top = `${e.clientY-startY}px`
      }
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
