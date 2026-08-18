import { motion } from "motion/react";

export function CatalogueSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-6 mt-6">
            {Array.from({ length: 6 }).map((_, index) => (
                <motion.div
                    key={index}
                    className="rounded-2xl p-6 min-h-[280px] bg-black/5"
                    animate={{ opacity: [0.45, 0.8, 0.45] }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: index * 0.08,
                        ease: "easeInOut",
                    }}
                >
                    <div className="h-12 w-12 rounded-xl bg-black/10 mb-6" />
                    <div className="h-5 w-3/4 rounded bg-black/10 mb-4" />
                    <div className="h-4 w-full rounded bg-black/10 mb-2" />
                    <div className="h-4 w-5/6 rounded bg-black/10" />
                </motion.div>
            ))}
        </div>
    );
}