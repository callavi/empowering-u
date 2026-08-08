import { motion } from "motion/react";

const directions = {
    up: { x: 0, y: 20 },
    down: { x: 0, y: -20 },
    left: { x: 20, y: 0 },
    right: { x: -20, y: 0 },
};

export function Reveal({
    children,
    className = "",
    direction = "up",
    delay = 0,
}) {
    const offset = directions[direction];

    return (
        <motion.div
            className={className}
            initial={{
                opacity: 0,
                ...offset,
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.5,
                delay,
                ease: "easeOut",
            }}
        >
            {children}
        </motion.div>
    );
}