import { useEffect, useState } from "react";
import { SWIGGY_D_API_2, SWIGGY_M_API } from "../config";

const useRestaurant = () => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    let apiToCall = SWIGGY_D_API_2; // Default to desktop API

    // Check if the user is on a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      apiToCall = SWIGGY_M_API; // Use mobile API
    }

    try {
      const data = await fetch(apiToCall);
      const resData = await data.json();
      setRestaurant(resData);
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  return restaurant;
};

export default useRestaurant;
