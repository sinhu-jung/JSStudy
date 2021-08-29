import React, { useRef } from "react";
import ReactDOM from "react-dom";
import Fullpage from "./Fullpage";

export default function App(){
  const fullPageRef = useRef();

  const onControlsClick = () => {
    fullPageRef.current.scrollToSlide(0);
  }


  return (
    <div className="container">
      <button
        style={{ position: 'fixed' }}
        onClick={onControlsClick}
        type="button"
      >
        Controls
      </button>
      <Fullpage ref={fullPageRef}/>
    </div>
  );
}