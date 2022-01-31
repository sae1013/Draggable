import React from "react";
import classes from "./Draggable.module.css";

function Draggable() {

  const dragHandler = (e) => { 
    console.log('dragHandler!')
  }

  const dragStartHandler = (e) => {
    e.dataTransfer.setData('key','드래그객체')
    e.target.style.opacity ="0.5"
    // e.dataTransfer.effectAllowed = "moveCopy";
  }
  const dragEndHandler = (e) => {
    e.target.style.opacity = "1"
  }
  return (
    <div className={classes.item} 
      onDrag = {dragHandler}
      onDragStart = {dragStartHandler} 
      onDragEnd = {dragEndHandler}
      draggable>
      DragItem
    </div>
  );
}

export default Draggable;
