import React from "react";
import twitter from "../svg/twitter.svg"
import github from "../svg/github.svg"

export const Footer = () => {
  return (
    <footer className="d-flex justify-content-end">
      <a href="https://github.com/Hate-vtubers" target="_blank" rel="noreferrer" style={{display:"inline-block", marginRight:"10px", marginBottom: "1rem"}}>
        <img src={github} alt="github" width="30px" />
      </a>
      <a href="https://twitter.com/willysinrex"  target="_blank" rel="noreferrer" style={{display:"inline-block", marginRight:"10px", marginBottom: "1rem"}}>
        <img src={twitter} alt="twitter" width="30px" />
      </a>
    </footer>
  );
};
