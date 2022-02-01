import React from "react";
import logo from "./logo.svg";
import Draggable from "./Draggable";
import Draggable2 from "./Draggable2";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.App}>
      <Draggable>
        <div className={classes.box}>박스</div>
      </Draggable>
      {/* <Draggable2></Draggable2> */}
    </div>
  );
}

export default App;
