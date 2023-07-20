import { createContext, useEffect, useState } from "react";
import {
  restaurantsRequest,
  transformRestaurants,
} from "./restaurants.service";

export const RestaurantsContext = createContext([]);

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { error, setError } = useState(null);

  function retrieveRestaurants() {
    setIsLoading(true);
    return setTimeout(() => {
      restaurantsRequest()
        .then(transformRestaurants)
        .then((res) => {
          setRestaurants(res);
          setIsLoading(false);
        })
        .catch((err) => {
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  }
  useEffect(() => {
    const timer = retrieveRestaurants();
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <RestaurantsContext.Provider value={{ restaurants, isLoading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
