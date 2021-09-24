import React from "react";

export const Subtitle = ({ subTitle }) => (
  <div style={{ textAlign: "center" }}>
    <h3
      className="px-4 mb-0 mx-auto"
      style={{
        backgroundColor: "#34c9fe",
        color: "#fff",
        display: "inline-block",
        borderRadius: "10px",
        boxShadow: "0px 0px 5px #34c9fe",
        textAlign: "center",
      }}
    >
      {subTitle}
    </h3>
  </div>
);
