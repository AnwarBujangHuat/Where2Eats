import { rating } from "../model/ratingItem";
import { foodItem } from "../model/foodItem";

export type restaurant = {
  id: string,
  restaurant: string,
  category: string,
  address: string,
  description: string,
  rate: number,
  image: string,
  userId: string,
  createdAt: string,
  rating: rating[],
  food: foodItem[],
};
