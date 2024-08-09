// export default Cart;
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../Contexts/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { RESTAURANT_MENU_FOOD_IMG } from "../config";
import { clearCart, incrementItem, decrementItem } from "../utils/cartSlice"; // import new action creators
import { toast } from "react-toastify";

function Cart() {
  const { user } = useContext(UserContext);
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncrementItem = (index) => {
    dispatch(incrementItem(index));
  };

  const handleDecrementItem = (index) => {
    dispatch(decrementItem(index));
  };

  const handleProceedToPayment = () => {
    const user = localStorage.getItem("user");
    if (!user) {
      toast.error(
        <div>
          <div className="font-bold">Login Required!!</div>
        </div>,
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );

      navigate("/login");
      return false;
    }
    navigate("/payment");
  };

  // Calculate initial price (sum of all items in the cart)
  const initialPrice = cartItem.reduce(
    (total, item) =>
      total +
      (item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100) *
        item.quantity,
    0
  );

  // Set delivery charges
  const deliveryCharges = 50;

  // Calculate total charges
  const totalPrice = initialPrice + deliveryCharges;

  return (
    <>
      {cartItem.length === 0 ? (
        <div className="flex items-center flex-col h-screen w-screen">
          <img src="empty_cart.png" alt="image" className="h-96" />
          <p className="text-xs font-bold text-gray-500 mt-3">
            Hello, {user.name}
          </p>
          <p className="text-xl font-bold mb-3">Your cart is empty.</p>
          <Link
            to="/"
            className="bg-[#fc8019] p-2 rounded-md text-white font-bold"
          >
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
              className="bg-orange-400 p-2 rounded-md m-2 font-bold text-white"
              onClick={() => handleClearCart()}
            >
              Clear cart
            </button>
          </div>
          {cartItem.map((item, index) => (
            <div
              key={index}
              className="border-2 container mx-auto my-5 p-5 flex flex-col md:flex-row justify-between items-center md:px-20 rounded-lg"
            >
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img
                  className="w-24 h-20 md:w-36 md:h-32"
                  src={RESTAURANT_MENU_FOOD_IMG + item?.card?.info?.imageId}
                  alt="image"
                />
                <p className="text-base md:text-lg font-bold py-2">
                  {item?.card?.info?.name}
                </p>
                <p className="text-sm md:text-base font-bold py-2">
                  Price: ₹
                  {item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100}
                </p>
              </div>
              <div className="mt-4 md:mt-0 flex justify-center md:justify-end">
                <div className="flex gap-2 items-center border p-1">
                  <button
                    className="bg-gray-300 px-2 md:px-3 font-bold text-xl md:text-2xl"
                    onClick={() => handleIncrementItem(index)}
                  >
                    +
                  </button>
                  <p className="font-bold text-xl md:text-2xl">
                    {item.quantity}
                  </p>
                  <button
                    className="bg-gray-300 px-2 md:px-3 font-bold text-xl md:text-2xl"
                    onClick={() => handleDecrementItem(index)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Order Section */}
          <div className="border-t-2 border-gray-300 pt-8 my-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Order Summary
            </h2>
            <div className="text-center text-xl font-semibold text-gray-600 mb-6">
              <p className="mb-3">
                <span className="text-gray-800">Initial Price:</span> ₹
                {initialPrice}
              </p>
              <p className="mb-3">
                <span className="text-gray-800">Delivery Charges:</span> ₹
                {deliveryCharges}
              </p>
              <p className="mt-4 text-2xl">
                <span className="text-gray-800">Total Charges:</span> ₹
                {totalPrice}
              </p>
            </div>
            <div className="flex justify-center items-center mt-8">
              <button
                className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg font-semibold text-lg"
                onClick={handleProceedToPayment}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
