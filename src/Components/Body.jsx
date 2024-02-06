import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import RestaurantList from './RestaurantList';
import Carousel from './Carousel';

function Body({ restaurantData }) {
    return (
        <>
            {
                !restaurantData ? <Shimmer /> :
                    <div>
                        <Carousel food={restaurantData} />
                        <RestaurantList restaurantsInfo={restaurantData} />
                    </div>
            }
        </>
    )
}

export default Body;
