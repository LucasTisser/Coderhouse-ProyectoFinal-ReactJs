import React from "react";
import { SpinnerStyle } from "./SpinnerStyle";
const Spinner = () => {
  return (
    <>
      {
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border"
            role="status"
            style={SpinnerStyle}
          ></div>
        </div>
      }
    </>
  );
};
export default Spinner;
