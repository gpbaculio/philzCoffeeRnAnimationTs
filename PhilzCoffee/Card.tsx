import React, { FC } from "react";
import { View } from "react-native";
import styled from "styled-components/native";

import { ProductType } from "./Model";
import Button from "./components/Button";
import CardHeader from "./components/CardHeader";
import { CARD_HEIGHT, width } from "./constants";

interface CardProps {
  product: ProductType;
}

const Card: FC<CardProps> = ({ product: { color1, title, subtitle } }) => (
  <Container>
    <SubContainer {...{ color1 }}>
      <HeaderContainer>
        <CardHeader />
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </HeaderContainer>
      <Button {...{ label: `I'll try it` }} />
    </SubContainer>
  </Container>
);

export default Card;

const Container = styled.View`
  width: ${width}px;
  height: ${CARD_HEIGHT}px;
`;

interface SubContainerProps {
  color1: string;
}

const SubContainer = styled.View<SubContainerProps>`
  ${({ color1 }) => `background-color: ${color1}`}
  border-radius: 16px
  margin: 32px
  flex: 1
  padding: 16px
  justify-content: space-between
`;

const Title = styled.Text`
  font-size: 28px;
  text-align: center;
  color: #432406;
  margin-bottom: 16px;
`;

const SubTitle = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #432406;
`;

const HeaderContainer = styled.View``;
