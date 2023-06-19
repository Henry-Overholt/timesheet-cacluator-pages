import { useState } from "react";
import "./TimeCalculator.css";
import Slider from "@mui/material/Slider";
import { TimeAndValueOptions } from "../../common/timesOptions";

export function TimeCalculatorComponent() {
  const [time, setTime] = useState<number[]>([8, 17]);

  const handleSlider = (event: Event, newValue: number | number[]) => {
    console.log(time);
    setTime(newValue as number[]);
  };
  return (
    <div className="Full-Week-Component">
      <h1>This Week</h1>
      <div className="slider-container">
        <h5>Daily Work Schedule</h5>
        <Slider
          style={{ color: "#a7d062" }}
          aria-label="Custom marks"
          valueLabelDisplay="off"
          step={1}
          value={time}
          onChange={handleSlider}
          marks={TimeAndValueOptions}
          min={5.5}
          max={20.5}
        />
      </div>
      <div className="dayCardContainer"></div>
    </div>
  );
}
