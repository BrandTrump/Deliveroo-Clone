import { Restaurant } from "./Resturant";

export type FeaturedCategory = {
  _id: string;
  name: string;
  short_description: string;
  restaurants: Array<Restaurant>;
};
