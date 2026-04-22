import React from "react";
import "../../assets/css/loader.css"; // ✅ small 'l'

const Loader = () => {
  return (
  <div className="page-loader">
  <div className="loader-box">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
  );
};

export default Loader;