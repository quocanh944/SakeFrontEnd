import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./admin/components/AppLayout";
import Blank from "./admin/pages/Blank";
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import Orders from "./admin/pages/Orders";
import Profile from "./admin/pages/Profile";
import CampaignForm from "./admin/pages/CampaignForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/order" element={<Orders />}></Route>
          <Route path="/product" element={<Products />}></Route>
          <Route path="/user" element={<Profile />}></Route>
          <Route path="/create-new-campaign" element={<CampaignForm />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
