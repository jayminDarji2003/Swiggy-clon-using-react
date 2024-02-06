import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_MENU_FOOD_IMG } from "../config";
import { clearCart, incrementItem, decrementItem } from "../utils/cartSlice"; // import new action creators

function Cart() {
  const { user } = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrementItem = (index) => { // new function to handle item increment
    dispatch(incrementItem(index));
  };

  const handleDecrementItem = (index) => { // new function to handle item decrement
    dispatch(decrementItem(index));
  };

  return (
    <>
      {cartItem.length === 0 ? (
        <div className="flex  items-center flex-col h-screen w-screen">
          <img src="empty_cart.png" alt="image" className="h-96" />
          <p className="text-xs font-bold text-gray-500 mt-3">
            Hello, {user.name}
          </p>
          <p className="text-xl font-bold mb-3">Your cart is empty.</p>
          <Link to="/" className="bg-[#fc8019] p-2 text-white font-bold">
            CHECK RESTAURANT FOOD
          </Link>
        </div>
      ) : (
        <div>
          <p className="text-center my-4 font-bold text-2xl text-gray-600">
            Cart page
          </p>
          <p className="text-center font-bold">
            {cartItem.length} items added to your cart.
          </p>
          <div className="flex justify-center items-center">
            <button
              className="bg-orange-400 p-2 rounded-md m-2 font-semibold"
              onClick={() => handleClearCart()}
            >
              Clear cart
            </button>
          </div>
          {cartItem.map((item, index) => (
            <div
              key={index}
              className="border-2 container mx-auto my-5 p-5 flex justify-between items-center px-20 rounded-lg"
            >
              <div className="">
                <img
                  className="w-36 h-32"
                  src={RESTAURANT_MENU_FOOD_IMG + item?.card?.info?.imageId}
                  alt="image"
                />
                <p className="text-lg font-bold py-2">
                  {item?.card?.info?.name}
                </p>
                <p className="font-bold py-2">
                  Price : {item?.card?.info?.price / 100}
                </p>
              </div>
              <div>
                <div className="flex gap-2 items-center border p-1">
                  <button
                    className="bg-gray-300 px-3 font-bold text-2xl"
                    onClick={() => handleIncrementItem(index)} // call handleIncrementItem function
                  >
                    +
                  </button>
                  <p className="font-bold text-2xl">{item.quantity}</p>{" "}
                  {/* Display item quantity */}
                  <button
                    className="bg-gray-300 px-3 font-bold text-2xl"
                    onClick={() => handleDecrementItem(index)} // call handleDecrementItem function
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Cart;
