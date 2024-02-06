// import { useEffect, useState } from "react";
// import { RESTAURANT_DETAILS_D_API, RESTAURANT_DETAILS_M_API } from "../config";

// const useRestaurantMenu = (id) => {
//   const [restaurant, setRestaurant] = useState(null);

//   useEffect(() => {
//     getRestaurantInfo();
//   }, []);

//   async function getRestaurantInfo() {
//     try {
//       const data = await fetch(
//         RESTAURANT_DETAILS_D_API +
//         id +
//         "&catalog_qa=undefined&submitAction=ENTER"
//       );
//       const json = await data.json();
//       setRestaurant(json.data);
//     } catch (error) {
//       console.error("Error fetching restaurant info:", error);
//     }
//   }

//   return restaurant;
// };

// export default useRestaurantMenu;




import { useEffect, useState } from "react";
import { RESTAURANT_DETAILS_D_API, RESTAURANT_DETAILS_M_API } from "../config";

const useRestaurantMenu = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    let apiToCall = RESTAURANT_DETAILS_D_API; // Default to desktop API

    // Check if the user is on a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      apiToCall = RESTAURANT_DETAILS_M_API; // Use mobile API
    }

    try {
      const data = await fetch(
        apiToCall + id + "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await data.json();
      setRestaurant(json.data);
    } catch (error) {
      console.error("Error fetching restaurant info:", error);
    }
  }

  return restaurant;
};

export default useRestaurantMenu;
