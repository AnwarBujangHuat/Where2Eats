import type { rating } from "../model/ratingItem";
import type { foodItem } from "../model/foodItem";

export interface restaurant {
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
}
