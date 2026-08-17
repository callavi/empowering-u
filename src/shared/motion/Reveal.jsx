import { motion } from "motion/react";
import { revealVariants } from "./variants";
import { transitions } from "./transitions";

const directionOffset = {
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
};

export default function Reveal({
    children,
    direction = "up",
    delay = 0,
    className,
}) {
    const offset = directionOffset[direction] ?? directionOffset.up;

    const variants = {
        hidden: {
            ...revealVariants.hidden,
            ...offset,
        },

        visible: revealVariants.visible,
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                ...transitions.reveal,
                delay,
            }}
        >
            {children}
        </motion.div>
    );
}