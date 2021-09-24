import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "./components/Spinners";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Subtitle } from "./components/Subtitle";
import { Footer } from "./components/Links";

const App = () => {
  const [data, setData] = useState(null);
  const [channels, setChannels] = useState(null);
  const [loading, setLoading] = useState(true);
  const getApis = async () => {
    const resData = await axios("https://api.holotools.app/v1/live").then((r) => r.data);
    const resChannel = await axios("https://api.holotools.app/v1/channels/").then((r) => r.data);
    setData(resData);
    setChannels(resChannel);
    setLoading(false);
  };
  useEffect(() => {
    getApis();
  }, []);
  return (
    <>
      <Header titleText="Hololive Info"></Header>
      <main>
        {loading ? <Spinner></Spinner> : null}
        {data === null ? null : (
          <>
            <Subtitle subTitle="Live"></Subtitle>
            <Container dataLive={data.live}></Container>
          </>
        )}
        {channels === null ? null : (
          <>
            <Subtitle subTitle="Hololive Channels"></Subtitle>
            <Container dataLive={channels.channels}></Container>
          </>
        )}
      </main>
      {loading ? null : <Footer></Footer>}
    </>
  );
};

export default App;
