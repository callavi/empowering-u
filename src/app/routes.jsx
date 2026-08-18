import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home/home"));
const Catalogue = lazy(() => import("../pages/Catalogue/catalogue"));
const NotFound = lazy(() => import("../pages/NotFound/notfound"));
const Contact = lazy(() => import("../pages/Contact/contact"));
const UIDesign = lazy(() => import("../pages/UIDesign/uidesign"));
const CataloguePage = lazy(() =>
    import("../pages/CataloguePage/CataloguePage")
);
const StartYourBusiness = lazy(() =>
    import("../pages/CampaignPage/StartYourBusiness")
);
const GrowYourBusiness = lazy(() =>
    import("../pages/CampaignPage/GrowYourBusiness")
);
const Cart = lazy(() => import("../pages/Cart/cart"));
const Checkout = lazy(() => import("../pages/Checkout/checkout"));
const PaymentSuccess = lazy(() =>
    import("../pages/PaymentSuccess/paymentsuccess")
);
const PaymentFailure = lazy(() =>
    import("../pages/PaymentFailure/paymentfailure")
);
const About = lazy(() => import("../pages/AboutPage/about"));
import PageTransition from "../shared/motion/PageTransition";

export default function Router() {
  return (
    <PageTransition>
      <Suspense fallback={null}>
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
      </Suspense>
    </PageTransition>
  );
}