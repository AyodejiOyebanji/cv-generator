import React from "react";
import Styles from "./css/Loading.module.css";

const Loading = () => {
  return (
    <div id={Styles.Container}>
      <div id={Styles.Background}>
      <div className="spinner">
        {/* <div className="spinner-border text-primary p-5" id={Styles.Spinner} role="status">
          <span className="visually-hidden"></span>
        </div> */}
        <div id={Styles.Spinner} class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
    <div class="spinner-grow text-primary" role="status"></div>
</div> 
<div class="spinner-grow text-info" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </div>
    </div>
      </div>
  );
};

export default Loading;

