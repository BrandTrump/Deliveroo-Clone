import { Category } from "./Category";
import { Dish } from "./Dish";

export type Restaurant = {
  _id: number;
  name: string;
  short_description: string;
  image: string;
  lat: number;
  long: number;
  address: string;
  rating: number;
  type: Category;
  dishes: Array<Dish>;
};
