import HomeIllustration from "./HomeIllustration";
import {FloatingCard} from "../../components/FloatingCard/FloatingCard"


export function HomepageIllustration ({cards}) {
    return (
        <div className="relative">
        <HomeIllustration />
        {cards.map((card) => (
            <FloatingCard
                key={card.id}
                {...card}
            />
        )
        )}
        </div>
    )
}