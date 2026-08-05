import { CatalogueGrid } from "../../shared/components/CatalogueGrid/CatalogueGrid";
import { productList } from "../../shared/data/services";


export default function Catalogue() {
  return (
    <>
      <CatalogueGrid products={productList} />
    </>

  )
}