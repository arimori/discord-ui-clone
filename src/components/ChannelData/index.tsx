import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(10).keys()).map((n) => (
          <ChannelMessage
            author="Naoshi Arimori"
            date="01/09/2020"
            content="Hoje é o meu aniversário"
          />
        ))}

        <ChannelMessage
          author="Victor Vigarani"
          date="01/09/2020"
          isBot
          hasMention
          content={
            <>
              <Mention>@Naoshi Arimori</Mention>, isso é problema seu!
            </>
          }
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
