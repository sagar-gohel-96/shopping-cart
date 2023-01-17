import { Routes, Route } from "react-router-dom";
import React from "react";
import { Home, Cart, ConfirmPage } from "../module/index";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/confirmpage" element={<ConfirmPage />} />
      </Routes>
    </div>
  );
};

export default Routing;
