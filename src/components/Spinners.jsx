import React from "react";

export const Spinner = () => (
  <div className="text-center my-5">
    <div className="spinner-border text-info" style={{ width:"3rem", height:"3rem" }} role="status">
      <span className="visually-hidden"></span>
    </div>
  </div>
);
