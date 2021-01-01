import React, { FC } from "react";
import { Image, StyleSheet, Text } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import styled from "styled-components/native";

import { SIZE, width } from "./constants";
import { ProductType } from "./Model";

interface ProductProps {
  x: Animated.SharedValue<number>;
  index: number;
  product: ProductType;
}

const Product: FC<ProductProps> = ({ x, index, product }) => {
  const containerStyle = useAnimatedStyle(() => {
    const inputRange = [
      width * (index - 1),
      width * index,
      width * (index + 1),
    ];

    const translateXOutputRange = [width / 2, 0, -width / 2];

    const translateX = interpolate(x.value, inputRange, translateXOutputRange);

    const scaleOutputRange = [0.75, 1, 0.75];

    const scale = interpolate(x.value, inputRange, scaleOutputRange);

    return {
      transform: [{ translateX }, { scale }],
    };
  });

  const imageStyle = {
    width: SIZE,
    height: SIZE * product.aspectRatio,
  };

  return (
    <Container
      {...{
        key: index,
        style: [containerStyle, StyleSheet.absoluteFillObject],
      }}>
      <Image
        {...{
          source: product.picture,
          style: imageStyle,
        }}
      />
    </Container>
  );
};

export default Product;

const Container = styled(Animated.View)`
  justify-content: center;
  align-items: center;
`;
