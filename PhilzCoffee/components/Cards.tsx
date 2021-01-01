/* eslint-disable max-len */
import React, { FC } from "react";
import { View } from "react-native";
import Card from "./Card";
import { cards } from "../constants";

const Cards = () => (
  <View>
    {cards.map(({ picture, caption }, index) => (
      <Card {...{ key: index, picture, caption }} />
    ))}
  </View>
);

export default Cards;
