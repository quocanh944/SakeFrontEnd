import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Products from "../pages/Products";
import Customer from "../pages/Customer";
import CampaignForm from "../form/CampaignForm";
import Brands from "../pages/Brands";
import ProductForm from "../form/ProductForm";
import Films from "../pages/Films";

const Admin = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Dashboard />}></Route>
            <Route path="/order" element={<Orders />}></Route>
            <Route path="/product" element={<Products />}></Route>
            <Route path="/customer" element={<Customer />}></Route>
            <Route
              path="/create-new-campaign"
              element={<CampaignForm />}
            ></Route>
            <Route path="/brands" element={<Brands />}></Route>
            <Route path="/films" element={<Films />}></Route>
            <Route path="/add-product" element={<ProductForm />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Admin;
