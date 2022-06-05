import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

const Spinner = () => {

  return (
    <>
      {
        <div className="d-flex justify-content-center">
          <SyncLoader color="#f6ff00" css={'margin: 375px'}/>
        </div>
      }
    </>
  );
};
export default Spinner;
