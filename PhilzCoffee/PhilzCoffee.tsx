import React from "react";
import Animated, {
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import styled from "styled-components/native";

import { products } from "./Model";
import Card from "./Card";
import Products from "./Products";
import Cards from "./components/Cards";
import { width, snapToOffsets, CARD_HEIGHT } from "./constants";

const PhilzCoffee = () => {
  const translateX = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset: { x } }) => {
      translateX.value = x;
    },
  });

  const style = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      translateX.value,
      products.map((_, i) => width * i),
      products.map((p) => p.color2)
    ) as string;

    return {
      flex: 1,
      paddingTop: 16,
      backgroundColor,
    };
  });

  return (
    <Animated.View {...{ style }}>
      <Animated.ScrollView
        {...{
          decelerationRate: "fast",
          snapToOffsets,
          bounces: false,
          showsVerticalScrollIndicator: false,
          snapToEnd: false,
        }}>
        <Slider>
          <Animated.ScrollView
            {...{
              onScroll,
              scrollEventThrottle: 16,
              horizontal: true,
              decelerationRate: "fast",
              snapToInterval: width,
              showsHorizontalScrollIndicator: false,
            }}>
            {products.map((product, index) => (
              <Card product={product} key={index} />
            ))}
          </Animated.ScrollView>
          <Products x={translateX} />
        </Slider>
        <Cards />
      </Animated.ScrollView>
    </Animated.View>
  );
};

export default PhilzCoffee;

const Slider = styled.View`
  height: ${CARD_HEIGHT}px;
`;
