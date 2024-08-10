import React from "react";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

function Profile() {
  const user = localStorage.getItem("user");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  const dispatch = useDispatch();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("registed");
    // localStorage.removeItem("cartItems");
    dispatch(clearCart());
    navigate("/");
  };

  if (!isLoggedIn) {
    navigate("/");
  }

  return (
    <>
      {!isLoggedIn ? (
        navigate("/")
      ) : (
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="bg-gray-50  shadow-md rounded-lg p-8 max-w-sm w-full">
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfTRW6oKy3ECss2u_25DixygCOBXMCvMMB9-nwGG_vzkCFNevijZ2bYzI8fLzPq2njvE&usqp=CAU"
                alt="User Avatar"
                className="rounded-full mx-auto mb-4 w-40 h-40"
              />
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                User Profile
              </h1>
              <p className="text-gray-600 mb-4">Welcome back!</p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-700">
                User Name:
              </h2>
              <p className="text-gray-800">
                {user || "User name not available"}
              </p>
            </div>
            <div className="mb-4">
              <h2 className="text-lg font-semibold text-gray-700">Email:</h2>
              <p className="text-gray-800">{email || "Email not available"}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-700">Password:</h2>
              <p className="text-gray-800">
                {password || "Password not available"}
              </p>
            </div>

            <button
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200"
              onClick={handleLogout}
            >
              Logout 🚀
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Profile;
