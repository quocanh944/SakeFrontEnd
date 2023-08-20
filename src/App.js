import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./admin/components/AppLayout";
import Blank from "./admin/pages/Blank";
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Profile from "./admin/pages/Profile";
import CampaignForm from "./admin/pages/CampaignForm";
import Brands from "./admin/pages/Brands";
import Films from "./admin/pages/Films";
import ProductForm from "./admin/form/ProductForm";
import Customer from "./admin/pages/Customer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/order" element={<Orders />}></Route>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/create-new-campaign" element={<CampaignForm />}></Route>
          <Route path="/brands" element={<Brands />}></Route>
          <Route path="/films" element={<Films />}></Route>
          <Route path="/add-product" element={<ProductForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
