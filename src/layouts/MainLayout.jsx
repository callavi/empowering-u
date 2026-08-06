import { Outlet } from "react-router-dom";

import Navbar from "../shared/components/Navbar/Navbar";
import Footer from "../shared/components/Footer/Footer";

import styles from "./MainLayout.module.css"

export default function MainLayout() {
    return (
        <>
            <Navbar />

            <main 
            key={location.pathname}
            className={styles.page}>
                <Outlet />
            </main>

            <Footer />
        </>
    );
}