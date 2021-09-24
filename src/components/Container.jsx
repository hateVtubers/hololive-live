import React from "react";
import { Card } from "./Card";

export const Container = ({ dataLive }) => (
  <div
    className="d-flex justify-content-evenly mx-auto my-4 flex-wrap"
    style={{
      width: "80%",
      borderRadius: "10px",
      boxShadow: "0px 0px 15px #34c9fe",
      paddingTop: "35px",
      paddingBottom: "35px",
    }}
  >
    {dataLive.map((i) => {
      try {
        return (
          <Card
            img={i.channel.photo}
            title={i.title}
            subTitle={i.channel.name}
            linkY={i.yt_video_key}
            linkT={i.channel.twitter_link}
            key={i.channel.name}
          ></Card>
        );
      } catch (error) {
        return (
          <Card
            img={i.photo}
            title={i.name}
            linkY={i.yt_channel_id}
            linkT={i.twitter_link}
            key={i.name}
          ></Card>
        );
      }
    })}
  </div>
);
