import { Dimensions, ImageSourcePropType } from "react-native";

export const { width } = Dimensions.get("window");

export const CARD_HEIGHT = (width * 1564) / 974;

export const SIZE = 200;

export const snapToOffsets = [0, CARD_HEIGHT];

export interface CardType {
  picture: ImageSourcePropType;
  caption: string;
}

export const cards: CardType[] = [
  {
    picture: require("./assets/cards/a.jpg"),
    caption: "We’ve got an exciting announcement coming November 23rd...",
  },
  {
    picture: require("./assets/cards/b.jpg"),
    caption:
      "Let's look out for one another and keep each other safe. Remember, please wear a mask to pick up your order. If you'd like to learn more about our safety procedures check out our Community Updates page",
  },
  {
    picture: require("./assets/cards/c.jpg"),
    caption: "We’ve got an exciting announcement coming November 23rd...",
  },
  {
    picture: require("./assets/cards/d.jpg"),
    caption:
      "Your mission, should you accept, is to snag yourself a bottle of this tasty cold brew to enjoy at home. Don't forget to add a 32oz bottle of Mission Cold Brew to your next order.",
  },
];
