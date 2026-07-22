import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/home";
import Catalogue from "../pages/Catalogue/catalogue";
import Checkout from "../pages/Checkout/checkout";
import NotFound from "../pages/NotFound/notfound";
import UIDesign from "../pages/UIDesign/uidesign";

export default function Router() {
  return (
    <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/uidesign" element={<UIDesign />} />
    </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}