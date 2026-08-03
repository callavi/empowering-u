import { useState } from "react";
import { FilterTab } from "../FilterTab/FilterTab";
import { ProductCard } from "../Cards/ProductCard/ProductCard";
import { Button } from "../Button/Button";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function CatalogueGrid ({products}){
    const [activeCategory, setActiveCategory] = useState("all");
    const INITIAL_COUNT = 4;
    const [showAll, setShowAll] = useState(false);

    const filteredProducts =
        activeCategory === "all"
            ? products
            : products.filter(
                product => product.category === activeCategory
            );
    const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, INITIAL_COUNT);

    return (
        <>
        <SectionHeading
            title="Our Services"
            description="We offer a wide range of services to meet your needs. Explore our catalogue below" />
        <FilterTab 
            activeCategory={activeCategory}
            onChange={setActiveCategory}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {visibleProducts.map((item)=> (
                <ProductCard 
                key={item.path}
                product={item}
                />
            ))}
        </div>
        {filteredProducts.length > INITIAL_COUNT && (
            <div className="mt-8 text-center">
                <Button variant="text" onClick={() => setShowAll(!showAll)}>
                    {showAll ? "Show Less" : "Show More"}
                </Button>
            </div>
        )}
        </>
    )
}

