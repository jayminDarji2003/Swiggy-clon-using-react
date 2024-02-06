import React from "react";
import { RESTAURANT_IMAGE_URL } from "../config";
import { Link } from "react-router-dom";
    

function RestaurantCard({ cloudinaryImageId, name, cuisines, avgRating, sla, locality }) {
    return (
        <>
            <div className="hover:scale-95 p-2 w-72 gap-1 py-3 m-4 flex  flex-col cursor-pointer rounded-xl ">
                <img className="h-40 rounded-xl w-64" src={RESTAURANT_IMAGE_URL + cloudinaryImageId} alt="Image is not able to see" />
                <div className="pl-2">
                    <p className="font-bold text-xl text-gray-800">{name}</p>
                    <p className="text-base font-bold text-gray-800">{cuisines?.join(" , ")}</p>
                    <p className="font-bold text-gray-600"><i className="text-green-500 fa-solid fa-star"></i>{avgRating}  <span className="font-extrabold"> . </span>  {sla?.lastMileTravelString}</p>
                    <p className="text-xs font-bold text-gray-600">{locality}</p>
                </div>
            </div>
        </>
    )
}

export default RestaurantCard;