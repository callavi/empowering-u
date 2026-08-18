import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterTab } from "../FilterTab/FilterTab";
import { ProductCard } from "../Cards/ProductCard/ProductCard";
import { Button } from "../Button/Button";
import { motion, AnimatePresence } from "motion/react";

const INITIAL_COUNT = 6;

export function CatalogueGrid ({products}){
const [searchParams, setSearchParams] = useSearchParams();
const activeCategory = searchParams.get("category") || "all";
    const [showAll, setShowAll] = useState(false);

const filteredProducts =
    activeCategory === "all"
        ? products
        : products.filter(product => product.category === activeCategory);
    const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, INITIAL_COUNT);

const categoryCounts = products.reduce((counts, product) => {
    counts[product.category] = (counts[product.category] || 0) + 1;
    return counts;
}, {});

const totalCount = products.length;
const filteredCount = filteredProducts.length;

    return (
        <section>
            <FilterTab
                activeCategory={activeCategory}
                onChange={(category) => {
                    if (category === "all") {
                        setSearchParams({});
                    } else {
                        setSearchParams({ category });
                    }

                    setShowAll(false);
                }}
                counts={categoryCounts}
                totalCount={totalCount}
            />
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 lg:gap-6 mt-6"
            >
                <AnimatePresence mode="popLayout">
                    {visibleProducts.map((item, index) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                                duration: 0.35,
                                delay: index * 0.06,
                                ease: "easeOut",
                            }}
                        >
                            <ProductCard product={item} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        {filteredProducts.length > INITIAL_COUNT && (
            <div className="mt-8 text-center">
                <Button variant="text" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Show fewer services" : `Show all ${filteredCount} services`}
                </Button>
            </div>
        )}
        </section>
    )
}

