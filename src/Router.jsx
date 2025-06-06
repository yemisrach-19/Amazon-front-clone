import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Components/Pages/Landing/Landing";

import Payment from "./components/Pages/Payment/Payment";
import Orders from "./Components/Pages/Order/Orders";
import Cart from "./Components/Pages/Cart/Cart";
import Results from "./Components/Pages/Result/Results";
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail";
import Auth from "./Components/Pages/Auth/Auth";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/payments" element={<Payment />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="/Cart" element={<Cart />} />

        <Route path="/products/:productid" element={<ProductDetail />} />

        <Route path="/Category/:categoryName" element={<Results />} />
      </Routes>
    </Router>
  );
}
export default Routing;
