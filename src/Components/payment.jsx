import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../utils/cartSlice";
import { toast } from "react-toastify";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoggedIn] = useState(localStorage.getItem("isLoggedIn"));

  const handlePaymentSubmit = (e) => {
    e.preventDefault();

    // Handle payment logic here
    console.log("Payment submitted:", {
      cardNumber,
      cardHolderName,
      expiryDate,
      cvv,
    });

    dispatch(clearCart());

    setCardNumber("");
    setCardHolderName("");
    setExpiryDate("");
    setCvv("");

    toast.success(
      <div>
        <div className="font-bold">Payment successfully!!</div>
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

    navigate("/");
  };

  return (
    <div>
      {isLoggedIn !== "yes" ? (
        navigate("/")
      ) : (
        <div className="flex justify-center items-center mt-20 ">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              Payment Details
            </h2>
            <form onSubmit={handlePaymentSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Card Number
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full rounded-lg"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="1234 5678 9012 3456"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">
                  Card Holder Name
                </label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 w-full rounded-lg"
                  value={cardHolderName}
                  onChange={(e) => setCardHolderName(e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="mb-4 flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full rounded-lg"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700 font-semibold mb-2">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="border border-gray-300 p-2 w-full rounded-lg"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-orange-600 hover:bg-orange-700 text-white p-3 w-full rounded-lg font-semibold text-lg"
              >
                Submit Payment
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
