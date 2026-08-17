import { Outlet } from "react-router-dom";

import Navbar from "../shared/components/Navbar/Navbar";
import Footer from "../shared/components/Footer/Footer";
import { WebsiteStructuredData } from "../shared/components/StructuredData/StructuredData";

export default function MainLayout() {
    return (
        <>
            <WebsiteStructuredData />
            <Navbar />

            <main className="relative">
                <Outlet />
            </main>

            <Footer />
        </>
    );
}