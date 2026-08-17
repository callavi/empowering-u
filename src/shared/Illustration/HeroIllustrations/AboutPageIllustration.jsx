import AboutIllustration from "./AboutIllustration";
import {FloatingCard} from "../../components/FloatingCard/FloatingCard"


export function AboutPageIllustration ({cards}) {
    return (
        <div className="relative">
        <AboutIllustration />
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