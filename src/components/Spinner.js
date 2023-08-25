import React from "react";
import Settings from "./Settings.gif";

const Spinner = () => {
  return (
    <div className="text-center">
      <img src={Settings} alt="loading" />
    </div>
  );
};

export default Spinner;
