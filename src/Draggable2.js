import React, { useState, useRef } from "react";
import classes from "./Draggable2.module.css";

// 이걸 구현하려면, 클릭했을 때, 
function Draggable2() {
  const [pos, setPos] = useState({startX:0,startY:0}); // 드래그를 시작하는 시점을 저장
  const [style, setStyle] = useState({});

  const ref = useRef(null);

  const mouseDownHandler = (e) => {
    // const boundingRect = ref.current.getBoundingClientRect();
    console.log(e.target.getBoundingClientRect())
    // setPos({
    //   startX: e.clientX,
    //   startY: e.clientY
    // });

    setStyle({
      ...style,
      opacity:"0.7"
    })

    const mouseMove = (e) => {
      // setStyle({
      //   left: e.clientX-pos.startX+boundingRect.x,
      //   top: e.clientY-pos.starty+boundingRect.y
      // })
      // // let offsetX = e.clientX - pos.diffX
      // // console.log(pos)
      // // let offsetY = e.clientY-pos.diffY  
      // // setStyle({...style, left:offsetX,top:offsetY})
    };
    
    const mouseUphandler = () => {
      setStyle({
        ...style,
        opacity:"1"
      })
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUphandler);
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUphandler);
  };

  return (
    <div ref={ref} style = {style} className={classes.box} onMouseDown={mouseDownHandler}>
      클릭
    </div>
  );
}

export default Draggable2;

// import React from "react";

// function Draggable({ children }) {
//   const targetRef = React.useRef(null);

//   const mouseDown = (e) => {
//     const [curLeft, curTop] = [
//       targetRef.current.offsetLeft,
//       targetRef.current.offsetTop,
//     ];
//     const [startX, startY] = [e.clientX, e.clientY];
//     const [clientWidth, clientHeight] = [
//       targetRef.current.clientWidth,
//       targetRef.current.clientHeight,
//     ];
//     const viewportWidth = window.innerWidth;
//     const viewportHeight = window.innerHeight;

//     const mouseMove = (e) => {
//       targetRef.current.style.opacity = "0.7";
//       let nextOffsetX = curLeft + e.clientX - startX;
//       let nextOffsetY = curTop + e.clientY - startY;

//       if (nextOffsetX < 0) {
//         nextOffsetX = 0;
//       } else if (nextOffsetX + clientWidth > viewportWidth) {
//         nextOffsetX = viewportWidth - clientWidth;
//       }
//       if (nextOffsetY < 0) {
//         nextOffsetY = 0;
//       } else if (nextOffsetY + clientHeight > viewportHeight) {
//         nextOffsetY = viewportHeight - clientHeight;
//       }
//       targetRef.current.style.left = `${nextOffsetX}px`;
//       targetRef.current.style.top = `${nextOffsetY}px`;
//     };

//     const mouseUp = (e) => {
//       window.removeEventListener("mousemove", mouseMove);
//       window.removeEventListener("mouseup", mouseUp);
//       targetRef.current.style.opacity = "1";
//     };

//     window.addEventListener("mousemove", mouseMove);
//     window.addEventListener("mouseup", mouseUp);
//   };

//   const TargetComponent = React.cloneElement(children, {
//     ref: targetRef,
//     onMouseDown: mouseDown,
//     style: { position: "absolute" },
//   });

//   return <React.Fragment>{TargetComponent}</React.Fragment>;
// }

// export default Draggable;
