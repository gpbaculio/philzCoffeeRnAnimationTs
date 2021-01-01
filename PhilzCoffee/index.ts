export { default } from "./PhilzCoffee";
import { cards } from "./constants";
import { products } from "./Model";

export const assets = products
  .map((product) => product.picture)
  .concat(cards.map((card) => card.picture));
