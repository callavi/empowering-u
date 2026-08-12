import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/home";
import Catalogue from "../pages/Catalogue/catalogue";
import NotFound from "../pages/NotFound/notfound";
import Contact from "../pages/Contact/contact";
import UIDesign from "../pages/UIDesign/uidesign";
import CataloguePage from "../pages/CataloguePage/CataloguePage";
import StartYourBusiness from "../pages/CampaignPage/StartYourBusiness";
import GrowYourBusiness from "../pages/CampaignPage/GrowYourBusiness";
import Cart from "../pages/Cart/cart";

export default function Router() {
  return (
    <Routes>
    <Route element={<MainLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/catalogue" element={<Catalogue />} />
      <Route
          path="/catalogue/:slug"
          element={<CataloguePage />}
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/uidesign" element={<UIDesign />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/catalogue/start-your-business" element={<StartYourBusiness />} />
      <Route path="/catalogue/grow-your-business" element={<GrowYourBusiness />} />
    </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}