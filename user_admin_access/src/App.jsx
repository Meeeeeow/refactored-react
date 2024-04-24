// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./Components/signin";
import Dashboard from "./Components/dashboard";

import PrivateRoutes from "./Components/PrivateRoutes";
import Products from "./Components/products";
import ProductDetails from "./Components/productDetails";
import Profile from "./Components/profile";
import UsersList from "./Components/usersList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard/*" element={<PrivateRoutes />}>
          <Route path="" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route path="profile" element={<Profile />} />
          <Route path="users" element={<UsersList />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
