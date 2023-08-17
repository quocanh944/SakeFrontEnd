import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./admin/components/AppLayout";
import Blank from "./admin/pages/Blank";
import Dashboard from "./admin/pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="/order" element={<Blank />}></Route>
          <Route path="/product" element={<Blank />}></Route>
          <Route path="/customer" element={<Blank />}></Route>
          <Route path="/create-new-campaign" element={<Blank />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
