import Container from "../Container/Container"
import { OverviewSectionContent } from "./OverviewSectionContent"
import {PriceCard} from "../Cards/PriceCard/PriceCard"

export function OverviewSection ({product}) {
    return (
        <Container>
            <div className="flex justify-between">
                <OverviewSectionContent product={product} />
                <PriceCard product={product}/>
            </div>
        </Container>
    )
}
