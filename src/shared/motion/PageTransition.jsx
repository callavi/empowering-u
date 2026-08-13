import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";

import { pageVariants } from "./variants";
import { transitions } from "./transitions";

export default function PageTransition({ children }) {
    const location = useLocation();

    return (
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
                {children}
            </motion.div>
        </AnimatePresence>
    );
}