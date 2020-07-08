import React from "react";

import ChannelBuuton from '../ChannelButton';

import { Container, Category, AddCategory } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategory />
      </Category>

      <ChannelBuuton channelName="chat-livre" />
      <ChannelBuuton channelName="trabalho" />
      <ChannelBuuton channelName="off-topic" />
      <ChannelBuuton channelName="warzone" />
      <ChannelBuuton channelName="meetings" />

    </Container>
  );
};

export default ChannelList;
