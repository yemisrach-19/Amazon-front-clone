import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Components/Pages/Landing/Landing";
import Signup from "./Components/Pages/Auth/Signup";
import Payment from "./components/Pages/Payment/Payment";
import Orders from "./Components/Pages/Order/Orders";
import Cart from "./Components/Pages/Cart/Cart";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Signup />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
export default Routing;
