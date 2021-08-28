import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { FullPage, Slide } from 'react-full-page';

export default function App(){
  const fullPageRef = useRef();

  const onControlsClick = () => {
    fullPageRef.current.scrollToSlide(0);
  }

  const baseStyle = {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div className="container">
      <button
        style={{ position: 'fixed' }}
        onClick={onControlsClick}
        type="button"
      >
        Controls
      </button>
      <FullPage ref={fullPageRef}>
        <Slide
          style={{
            ...baseStyle,
            background: '#2ECC40',
          }}
        >
          <h1>Custom Controls</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#0074D9',
          }}
        >
          <h1>2</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#00c4ff',
          }}
        >
          <h1>3</h1>
        </Slide>
        <Slide
          style={{
            ...baseStyle,
            background: '#d52685',
          }}
        >
          <h1>4</h1>
        </Slide>
      </FullPage>
    </div>
  );
}