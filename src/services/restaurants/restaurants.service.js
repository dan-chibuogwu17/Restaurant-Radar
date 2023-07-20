import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject();
    }
    resolve(mock);
  });
};

export const transformRestaurants = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      photos: restaurant.photos.map(
        (p) => mockImages[Math.ceil(Math.random() * mockImages.length - 1) || 0]
      ),
      isOpenNow:
        restaurant?.opening_hours && restaurant?.opening_hours?.open_now,
      isClosedTemporarily: restaurant?.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
