import React, { useState, useEffect, lazy, Suspense } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Search from "./Components/Search";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Error from "./Components/Error";
import Offers from "./Components/Offers";
import Help from "./Components/Help";
import Authentication from "./Components/Authentication";
import Cart from "./Components/Cart";
import RestaurantMenu from "./Components/RestaurantMenu";
import useRestaurant from "./Hooks/useRestaurant";
import useOnline from "./Hooks/useOnline";
import OfflinePage from "./Components/OfflinePage";
import Loader from "./Components/Loader";
import Login from "./Components/Login";
import Register from "./Components/Register";
import UserContext from "./Contexts/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Payment from "./Components/payment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// We are lazy loading the Instamart so don't import like this
// import Instamart from "./Components/Instamart";
// do like this
const Instamart = lazy(() => import("./Components/Instamart"));

function AppLayout() {
  const offline = useOnline(); // custom hook for check wheather you are offline or online

  if (!offline) {
    return <OfflinePage />;
  }

  const [userData, setUserData] = useState({
    name: "Jaymin Darji",
    email: "jaymin@gmail.com",
  });

  return (
    <>
      <Provider store={store}>
        <UserContext.Provider value={{ user: userData, setUser: setUserData }}>
          <Header />
          <Outlet />
        </UserContext.Provider>
      </Provider>
    </>
  );
}

function App() {
  const allRestaurant = useRestaurant(); // custom hook which is used to get all the data for restaurant.

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            {/* Rendering body component on '/' path with restaurantData props  */}
            <Route index element={<Body restaurantData={allRestaurant} />} />

            {/* Rendering search component on '/search' path */}
            <Route
              path="search"
              element={<Search restaurantData={allRestaurant} />}
            />

            {/* Rendering offers page  */}
            <Route path="offers" element={<Offers />} />

            {/* Rendering instamart page  */}
            <Route
              path="instamart"
              element={
                // This Suspense is for Lazy loading
                // fallback is used for what you want to show when your component is loading.
                <Suspense fallback={<Loader />}>
                  <Instamart />
                </Suspense>
              }
            />

            {/* Rendering help page */}
            <Route path="help" element={<Help />} />

            {/* Rendering authentication page */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* Rendering cart page */}
            <Route path="cart" element={<Cart />} />

            {/* rendering payment page */}
            <Route path="payment" element={<Payment />} />

            {/* Dynamic routes  */}
            <Route path="restaurant/:id" element={<RestaurantMenu />} />
          </Route>
          <Route
            path="*"
            element={
              <Error
                name={"Opps!!, something went wrong. Please go to home page."}
              />
            }
          />
        </Routes>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
      </BrowserRouter>
    </>
  );
}

export default App;
