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
import Checkout from "../pages/Checkout/checkout";
import PaymentSuccess from "../pages/PaymentSuccess/paymentsuccess";
import PaymentFailure from "../pages/PaymentFailure/paymentfailure";
import PageTransition from "../shared/motion/PageTransition";
import About from "../pages/AboutPage/about";

export default function Router() {
  return (
    <PageTransition>
      <Routes>
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/failure" element={<PaymentFailure />} />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route
              path="/catalogue/:slug"
              element={<CataloguePage />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/uidesign" element={<UIDesign />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/catalogue/start-your-business" element={<StartYourBusiness />} />
          <Route path="/catalogue/grow-your-business" element={<GrowYourBusiness />} />
          <Route path="/about" element={<About />} />
        </Route>
          <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
}