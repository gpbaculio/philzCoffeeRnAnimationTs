import React, { FC } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

import { products } from "./Model";
import Product from "./Product";

interface ProductsProps {
  x: Animated.SharedValue<number>;
}

const Products: FC<ProductsProps> = ({ x }) => (
  <Container
    {...{
      style: StyleSheet.absoluteFillObject,
      pointerEvents: "none",
    }}>
    {products.map((product, index) => (
      <Product {...{ key: index, x, index, product }} />
    ))}
  </Container>
);

export default Products;

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
