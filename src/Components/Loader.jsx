import React from "react";
import loader from "/loader.gif";

function Loader() {
  return (
    <div className="flex justify-center items-center h-72">
      <img className="w-20" src={loader} alt="loader image" />
    </div>
  );
}

export default Loader;
