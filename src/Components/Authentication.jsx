import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

function Authentication() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return <>{isLoggedIn ? <Login /> : <Register />}</>;
}

export default Authentication;
