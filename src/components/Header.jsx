import React from "react";

export const Header = ({ titleText }) => {
  return (
    <header
      className="d-flex justify-content-evenly mx-auto my-3"
      style={{
        textAlign: "center"
      }}
    >
      <h1
        className="px-4 mb-1"
        style={{
          color: "#34c9fe",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px #34c9fe",
          display: "inline-block",
        }}
      >
        {titleText}
      </h1>
    </header>
  );
};
