import React, { ChangeEvent, useState } from "react";
import internal from "stream";
import "./Slider.css";

interface SliderProps {
  min: number;
  max: number;
  stepSize: number;
  onChange?: () => void;
}

/*

*/
export const Slider = ({ min=0, max=100, stepSize=1, ...props }: SliderProps) => {
  const [value, setValue] = useState("0");

  return (
      <div className="slider-container">
        <div className="inputBlock">
          <input type="number" id="myInputBlock" min={min} max={max} value={value} onChange={(event) => setValue(event.target.value)}></input>
          <label>Unit</label>
        </div>
        <input type="range" id="mySlider" className="slider" min={min} max={max} value={value} step={stepSize} onChange={(event) => setValue(event.target.value)}></input>
      </div>
  );
};
