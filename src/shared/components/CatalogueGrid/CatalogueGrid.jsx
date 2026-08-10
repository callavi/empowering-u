import { useState} from "react";
import { useSearchParams } from "react-router-dom";
import { FilterTab } from "../FilterTab/FilterTab";
import { ProductCard } from "../Cards/ProductCard/ProductCard";
import { Button } from "../Button/Button";
import styles from "./CatalogueGrid.module.css";

const INITIAL_COUNT = 12;

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
            />
        <div className="flex items-center justify-center p-6"><p className={styles.subheading}>23 services available</p></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {visibleProducts.map((item)=> (
                <ProductCard 
                key={item.id}
                product={item}
                />
            ))}
        </div>
        {filteredProducts.length > INITIAL_COUNT && (
            <div className="mt-8 text-center">
                <Button variant="text" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Show fewer services" : "Show all 23 services"}
                </Button>
            </div>
        )}
        </section>
    )
}

