import React from 'react'
import logo from "./logo.svg";
import Draggable from "./Draggable";
import classes from "./App.module.css";

function App() {
  const [dotted,setDotted] = React.useState(false)
  const dropHandler = (e) => {
    e.preventDefault()
    console.log(e.dataTransfer.getData('key'))
    setDotted(false)
    // console.log('onDrop')
  }
  const dragOverHandler =(e) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = "copy"
    // console.log('onDragover')
  }
  const dragEnterHandler = (e) => {
    console.log('dragEnter')
    setDotted(true)
  }
  const dragLeaveHandler = (e) => {
    console.log('dragLeave')
    setDotted(false)
  }

  return (
    <div className="App">
      <Draggable />
      <div className={`${classes.dropzone} ${dotted ? classes.dotted: ''}`} 
        droppable = "true"
        onDrop = {dropHandler}
        onDragOver = {dragOverHandler}
        onDragEnter = {dragEnterHandler}
        onDragLeave = {dragLeaveHandler}
        >
        DropZone
      </div>
    </div>
  );
}

export default App;
