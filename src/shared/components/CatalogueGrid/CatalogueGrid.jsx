import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FilterTab } from "../FilterTab/FilterTab";
import { ProductCard } from "../Cards/ProductCard/ProductCard";
import { Button } from "../Button/Button";
import { motion, AnimatePresence } from "motion/react";
import { SUBCATEGORIES } from "../../data/services/catalogueInfo";

import styles from "./CatalogueGrid.module.css";

const INITIAL_COUNT = 6;
const REGISTRATION_CATEGORY = "registration-compliance";

export function CatalogueGrid({ products }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [showAll, setShowAll] = useState(false);

  const filteredProducts = useMemo(
    () =>
      activeCategory === "all"
        ? products
        : products.filter(
            (product) => product.category === activeCategory
          ),
    [products, activeCategory]
  );

  const groupedProducts = useMemo(() => {
    if (activeCategory !== REGISTRATION_CATEGORY) {
      return [];
    }

    return SUBCATEGORIES.map((subcategory) => ({
        ...subcategory,
        products: filteredProducts.filter(
          (product) => product.subcategory === subcategory.id
        ),
      }))
      .filter((group) => group.products.length > 0);
  }, [activeCategory, filteredProducts]);

  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, INITIAL_COUNT);

  const categoryCounts = products.reduce((counts, product) => {
    counts[product.category] =
      (counts[product.category] || 0) + 1;

    return counts;
  }, {});

  const totalCount = products.length;
  const filteredCount = filteredProducts.length;

  const handleCategoryChange = (category) => {
    if (category === "all") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }

    setShowAll(false);
  };

  const scrollToSubcategory = (subcategoryId) => { 
    const element = document.getElementById( `subcategory-${subcategoryId}` ); 
    if (!element) 
      return; 
    const offset = 200; 
    const top = element.getBoundingClientRect().top + window.scrollY - offset; 
    window.scrollTo({ top, behavior: "smooth", }); 
  };

  return (
    <section className={styles.catalogue}>
      <div className={styles.filters}>
        <FilterTab
          activeCategory={activeCategory}
          onChange={handleCategoryChange}
          counts={categoryCounts}
          totalCount={totalCount}
        />
      </div>

      {activeCategory === REGISTRATION_CATEGORY ? (
        <>
        <nav 
          className={styles.subcategoryNav} 
          aria-label="Registration and Compliance services" > 
          <div className={styles.subcategoryNavInner}> 
            {groupedProducts.map((group) => 
              ( <button key={group.id} type="button" 
                        className={styles.subcategoryLink} 
                        onClick={() => scrollToSubcategory(group.id) } > 
                  {group.label} 
                </button> 
              ))} 
            </div> 
          </nav>
          <div className={styles.groups}>
            {groupedProducts.map((group) => (
              <div
                key={group.subcategory}
                className={styles.group}
                id={`subcategory-${group.id}`}
              >
                <h2 className={styles.groupHeading}>
                  {group.label}
                </h2>

                <motion.div className={styles.grid}>
                  <AnimatePresence mode="popLayout">
                    {group.products.map((item, index) => (
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
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          <motion.div className={styles.grid}>
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
            <div className={styles.more}>
              <Button
                variant="text"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll
                  ? "Show fewer services"
                  : `Show all ${filteredCount} services`}
              </Button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
