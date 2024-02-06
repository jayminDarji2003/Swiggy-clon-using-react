import React, { useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import UserContext from "../Contexts/UserContext";

function Search({ restaurantData }) {
  const [searchTxt, setSearchTxt] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const { user, setUser } = useContext(UserContext);

  const restaurants =
    restaurantData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants;

  const filterRestaurants = (searchText, restaurants) => {
    return restaurants.filter((restaurant) => {
      const nameMatches = restaurant.info.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
      const cuisineMatches = restaurant.info.cuisines.includes(
        searchText.toLowerCase()
      );
      return nameMatches || cuisineMatches;
    });
  };

  const handleSearch = (text) => {
    const data = filterRestaurants(text, restaurants);
    setFilteredRestaurants(data);
    setSearchPerformed(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(e.target.value);
    }
  };

  return (
    <>
      <div className="w-96 mt-10 p-5 m-auto flex items-center justify-center gap-2 rounded-md shadow-lg bg-white">
        <input
          className="p-2 outline-none rounded-md placeholder-gray-500 ring-2 ring-orange-400 focus:ring-orange-400"
          type="text"
          placeholder="Search restaurant"
          value={searchTxt}
          onChange={(e) => setSearchTxt(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-orange-400 p-2 px-4 rounded-md text-white font-bold hover:bg-orange-500 transition duration-300"
          onClick={() => handleSearch(searchTxt)}
        >
          SEARCH
        </button>
      </div>

      {/* 
      <div>
        <input
          type="text"
          value={user.name}
          className="border-2 m-2"
          onChange={(e) => {
            setUser({
              ...user,
              name: e.target.value,
            });
          }}
        />
      </div> */}

      <div className="flex flex-wrap justify-center">
        {searchPerformed && filteredRestaurants.length === 0 ? (
          <h1 className="pt-5">No restaurant found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </>
  );
}

export default Search;
