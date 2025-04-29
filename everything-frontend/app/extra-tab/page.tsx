import React from "react";
import ProgressBar from "../machine-coding/progress-bar";

const ExtraTab = () => {
  return (
    <div>
      <ProgressBar total={100} start={30} middle={10}></ProgressBar>
    </div>
  );
};
export default ExtraTab;
