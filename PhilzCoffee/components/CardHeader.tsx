import React from "react";
import { Feather as Icon } from "@expo/vector-icons";
import styled from "styled-components/native";

const CardHeader = () => {
  return (
    <Container>
      <UpperView />
      <Title>RECOMMEND</Title>
      <Action>
        <Icon {...{ name: "edit", size: 16 }} />
      </Action>
    </Container>
  );
};

export default CardHeader;

const Container = styled.View`
  flex-direction: row;
  padding: 16px;
  margin-bottom: 16px;
  align-items: center;
`;

const UpperView = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  align-self: center;
`;

const Action = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-self: center;
`;
