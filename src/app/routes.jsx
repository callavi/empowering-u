import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/home";
import Catalogue from "../pages/Catalogue/catalogue";
{/*import Checkout from "../pages/Checkout/checkout";*/}
import NotFound from "../pages/NotFound/notfound";
import Contact from "../pages/Contact/contact";
import UIDesign from "../pages/UIDesign/uidesign";
import CataloguePage from "../pages/CataloguePage/CataloguePage";
import StartYourBusiness from "../pages/CampaignPage/StartYourBusiness";
import GrowYourBusiness from "../pages/CampaignPage/GrowYourBusiness";

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
      {/*<Route path="/checkout" element={<Checkout />} />*/}
      <Route path="/uidesign" element={<UIDesign />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/start-your-business" element={<StartYourBusiness />} />
      <Route path="/grow-your-business" element={<GrowYourBusiness />} />
    </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}