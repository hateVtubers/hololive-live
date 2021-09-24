import React from "react";

export const Card = ({ img, title, subTitle, linkY, linkT }) => {
  return (
    <div className="card my-3" style={{ width: "18rem" }}>
      <img src={img} alt="vtuber" className="card-img-top" />
      <main className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle">{subTitle}</h6>
        <div className="d-flex justify-content-around mt-3">
          <a
            href={linkY.length > 11 ? `https://www.youtube.com/channel/${linkY}` : `https://www.youtube.com/watch?v=${linkY}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-danger hover"
          >
            Youtube
          </a>
          <a
            href={`https://twitter.com/${linkT}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-info hover link-light"
          >
            Twitter
          </a>
        </div>
      </main>
    </div>
  );
};
