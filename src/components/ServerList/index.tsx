import React from "react";

import ServerButton  from '../ServerButton';

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton hasNotifications mentions={7}/>
      <ServerButton hasNotifications />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={12} />
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton hasNotifications mentions={1}/>
      <ServerButton hasNotifications/>
      <ServerButton mentions={45}/>
      <ServerButton />
      <ServerButton mentions={2}/>
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton mentions={1}/>
      <ServerButton hasNotifications/>
      <ServerButton />
      <ServerButton hasNotifications mentions={12}/>
      <ServerButton />
    </Container>
  );
};

export default ServerList;