import before from "./demos/before.mp4";
import after from "./demos/after.mp4";

import "./styles/slider.css";

import { ReactCompareSlider } from "react-compare-slider";

const SingleGameSlider = ({ beforeVideo, afterVideo }) => {
  return (
    <ReactCompareSlider
      // className="max-w-4xl inline-block mr-4"
      className="slider"
      itemOne={
        <video autoPlay loop muted className="video">
          <source src={before} type="video/mp4" />
        </video>
      }
      itemTwo={
        <video autoPlay loop muted className="video">
          <source src={after} type="video/mp4" />
        </video>
      }
    />
  );
};

export default SingleGameSlider;
