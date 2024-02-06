import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

function RestaurantList({ restaurantsInfo }) {
    const restaurants = restaurantsInfo?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    return (
        <>
            {
                <>
                    <p className='text-xl container mx-auto font-bold lg:text-2xl lg:mt-5'>Top restaurants in Ahmedabad</p>
                    <div className="flex flex-wrap justify-center">
                        {
                            restaurants?.length === 0 ? <h1>Not restaurant found</h1> : restaurants.map((restaurant) => {
                                return (
                                    <Link to={"/restaurant/" + restaurant?.info?.id} key={restaurant?.info?.id}>
                                        <RestaurantCard {...restaurant?.info} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </>
            }
        </>

    )
}

export default RestaurantList;





