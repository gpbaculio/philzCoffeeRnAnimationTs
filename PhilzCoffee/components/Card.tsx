import React, { FC } from "react";
import { ImageSourcePropType, StyleSheet } from "react-native";
import styled from "styled-components/native";

import { width } from "../constants";

interface CardProps {
  picture: ImageSourcePropType;
  caption: string;
}

const Card: FC<CardProps> = ({ picture, caption }) => (
  <>
    <ImageContainer {...{ height: width }}>
      <StyledImage
        {...{ source: picture, style: StyleSheet.absoluteFillObject }}
      />
    </ImageContainer>
    <CaptionContainer>
      <Caption>{caption}</Caption>
    </CaptionContainer>
  </>
);

export default Card;

interface ContainerProps {
  height: number;
}

const ImageContainer = styled.View<ContainerProps>`
  ${({ height }) => `height: ${height}px;`}
  margin-top: 16px;
  margin-horizontal: 32px;
`;

const StyledImage = styled.Image`
  width: undefined;
  height: undefined;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const CaptionContainer = styled.View`
  margin-horizontal: 32px;
  padding: 24px;
  background-color: white;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin-bottom: 16px;
`;

const Caption = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #432406;
`;
