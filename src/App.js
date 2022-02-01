import React from "react";
import logo from "./logo.svg";
import Draggable from "./Draggable";
// import Draggable from 'react-draggable';
import classes from "./App.module.css";

function Parent({children}) {
  const ReactElement = React.cloneElement(children,{style:{backgroundColor:'blue'},onClick:()=>{alert(123)}})
  return <React.Fragment>{ReactElement}</React.Fragment>;
}
function Child() {
  return <div onClick={()=>{console.log('자식자식')}}>자식</div>;
}
function Child1(){
  return <div style={{width:'100px',height:'100px',backgroundColor:'red'}}>Child1</div>
} 
function App() {
  return (
    <div className={classes.App}>
      {/* <Parent>
        <Child></Child>
      </Parent> */}
      <Draggable>
        <div className={classes.box}>박스</div>
      </Draggable>
    </div>
  );
}

export default App;
