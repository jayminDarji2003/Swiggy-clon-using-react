import { useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_FOOD_IMG } from "../config";
import Loader from "./Loader";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function RestaurantMenu() {
  const { id } = useParams(); // reading a dynamic URL
  const restaurant = useRestaurantMenu(id); // custom hook created to fetch the restaurant menu details.
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState(""); // State to hold search query

  const handleAddItem = (item) => {
    dispatch(addItem(item)); // dispatch(action-->addItem("item name"))
  };

  // Filter items based on search query
  const filteredItems =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      ?.flatMap((category) => category?.card?.card?.itemCards || [])
      ?.filter((item) =>
        item?.card?.info?.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return !restaurant ? (
    <Loader />
  ) : (
    <>
      {/* Restaurant details */}
      <div className="w-screen flex justify-center">
        <div className="w-1/2 my-7 flex justify-between">
          <div>
            <p className="text-xl font-bold">
              {restaurant?.cards[0]?.card?.card?.info?.name}
            </p>
            <div className="flex mt-2">
              <p className="text-sm font-semibold text-gray-500">
                {restaurant?.cards[0]?.card?.card?.info?.cuisines[0]}
              </p>
              <p className="text-sm font-semibold text-gray-500">
                , {restaurant?.cards[0]?.card?.card?.info?.cuisines[1]}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-sm font-semibold text-gray-500">
                {restaurant?.cards[0]?.card?.card?.info?.areaName}
              </p>
              <p className="text-sm font-semibold text-gray-500">
                {
                  restaurant?.cards[0]?.card?.card?.info?.sla
                    ?.lastMileTravelString
                }
              </p>
            </div>

            <div className="flex items-center mt-3 gap-2">
              <i
                className="fa-solid fa-person-biking"
                style={{ color: " #808080" }}
              ></i>
              <p className="text-sm text-gray-500  font-semibold">
                {restaurant?.cards[0]?.card?.card?.info?.feeDetails?.message}
              </p>
            </div>
          </div>

          <div className="border-2 h-20 w-36 flex flex-col justify-center items-center rounded-lg ">
            <div>
              <i className="fa-solid fa-star text-orange-400"></i>
              <span className="ml-2 font-bold text-orange-400">
                {restaurant?.cards[0]?.card?.card?.info?.avgRating}
              </span>
            </div>
            <hr />
            <div>
              <p className="text-xs">
                {restaurant?.cards[0]?.card?.card?.info?.totalRatingsString}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <h1 className="text-center text-2xl font-bold ">MENU - FOOD</h1>

      {/* Search input field */}
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search for food..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded-md mt-4"
        />
      </div>

      {/* Display filtered food items */}
      <div className="flex justify-center">
        <div className="w-1/2">
          {filteredItems?.map((item, itemIndex) => (
            <div
              key={itemIndex}
              className="flex justify-between p-5 border-2 rounded-lg m-10"
            >
              <div>
                <p className="text-orange-400 font-bold text-xl">
                  {item?.card?.info?.name}
                </p>
                <p className="text-sm w-96 font-medium text-gray-700">
                  {item?.card?.info?.description}
                </p>
                <p className="mt-5 font-bold ">
                  Price : ₹{item?.card?.info?.price / 100}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <img
                  className="w-36 h-32 hover:scale-90"
                  src={RESTAURANT_MENU_FOOD_IMG + item?.card?.info?.imageId}
                  alt="image"
                />
                <button
                  className="bg-orange-400 p-1 rounded-md px-3 text-white flex justify-center items-center font-bold gap-1"
                  onClick={() => handleAddItem(item)}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                  <p>ADD</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default RestaurantMenu;
