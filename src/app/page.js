"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useChain } from "@cosmos-kit/react";

export default function Home() {
  const {
    status,
    username,
    address,
    message,
    connect,
    disconnect,
    openView,
  } = useChain("osmosis");

  // const canvasRef = useRef(null);

  // const [config, setConfig] = useState({
  //   x: 0,
  //   y: 0,
  //   scale: 1
  // });
  // const [context, setContext] = useState(null);
  // const [previous, setPrevious] = useState({
  //   x: 0,
  //   y: 0
  // });
  // const [updated, setUpdated] = useState(false);
  // const [mouseDown, setMouseDown] = useState(false);

  // const drawRect = (x, y, width, height, color) => {
  //   context.fillStyle = color;
  //   context.fillRect(x, y, width, height);
  // }

  // const draw = () => {
  //   console.log(config.x, config.y);
  //   context.setTransform(1, 0, 0, 1, 0, 0);
  //   context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  //   context.setTransform(1, 0, 0, config.scale, config.x, config.y);
  //   drawRect(0, 0, 100, 100, 'red');
  //   drawRect(200, 200, 100, 100, 'blue');
  // }

  // const updatingPan = (e) => {
  //   const localX = e.clientX;
  //   const localY = e.clientY;

  //   setConfig((prev) => ({
  //     x: prev.x += (localX - previous.x),
  //     y: prev.y += (localY - previous.y)
  //   }));

  //   setPrevious({
  //     x: localX,
  //     y: localY
  //   });

  //   setUpdated(true);
  // }

  // const updatingZoom = (e) => {
  //   const oldScale = config.scale;
  //   const oldX = config.x;
  //   const oldY = config.y;

  //   const localX = e.clientX;
  //   const localY = e.clientY;

  //   const previousScale = config.scale;
  //   const newScale = config.scale + (e.deltaY * -0.01);

  //   const newX = localX - (localX - oldX) * (newScale / previousScale);
  //   const newY = localY - (localY - oldY) * (newScale / previousScale);

  //   setConfig((prev) => ({
  //     ...prev,
  //     scale: newScale
  //   }));
  // }

  // const onMouseWheel = (e) => {
  //   // console.log("Wheel");
  //   updatingPan(e);
  //   // updatingZoom(e);
  //   draw();
  // }

  // const onMouseMove = (e) => {
  //   // console.log("Mouse");
  //   if (!mouseDown) return;
  //   updatingPan(e);
  //   draw();
  // }

  // useEffect(() => {
  //   setContext(canvasRef.current.getContext("2d"));
  // }, []);

  // useEffect(() => {
  //   if (context) {
  //     drawRect(0, 0, 100, 100, 'red');
  //     drawRect(200, 200, 100, 100, 'blue');
  //   }
  // }, [context]);

  // if (updated) {
  //   draw();
  //   setUpdated(false);
  // }

  return (
    // <canvas ref={canvasRef} width={3032} onWheelCapture={onMouseWheel} onMouseMove={onMouseMove} onMouseDown={(e) => {
    //   if(e.nativeEvent.button === 2){
    //     setMouseDown(true);
    //   }
    //   console.log(e);
    // }} onMouseUp={() => setMouseDown(false)} height={1962} style={{
    //   width: "100vw",
    //   height: "100vh"
    // }}>
    // </canvas>
    <>
      <button onClick={connect}>Connect</button>
    </>
  );
}