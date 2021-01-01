import React, { FC } from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";

import { width } from "../constants";

interface ButtonProps {
  label: string;
}

const containerWidth = (width - 64) / 2;

const Button: FC<ButtonProps> = ({ label }) => (
  <Container {...{ width: containerWidth }}>
    <Label>{label}</Label>
  </Container>
);

export default Button;

interface ContainerProps {
  width: number;
}

const Container = styled(Pressable)<ContainerProps>`
  ${({ width }) => `width: ${width}px;`}
  background-color: #432406;
  padding: 16px;
  flex-direction: row;
  justify-content: center;
  align-self: center;
  border-radius: 27px
  height: 54px
`;

const Label = styled.Text`
  color: white;
  font-size: 16px;
  align-self: center;
`;
