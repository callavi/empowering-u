import { useLocation, useOutlet } from "react-router-dom";

import Navbar from "../shared/components/Navbar/Navbar";
import Footer from "../shared/components/Footer/Footer";

import { AnimatePresence, motion } from "motion/react";

import { pageVariants } from "../shared/motion/variants";
import { transitions } from "../shared/motion/transitions";


export default function MainLayout() {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <>
            <Navbar />

            <main className="relative">
                <AnimatePresence
                    initial={false}
                    mode="wait"
                    onExitComplete={() => {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "instant",
                        });
                    }}
                >
                    <motion.div
                        key={location.pathname}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={transitions.page}
                        variants={pageVariants}
                    >
                        {outlet}
                    </motion.div>
                </AnimatePresence>
            </main>

            <Footer />
        </>
    );
}