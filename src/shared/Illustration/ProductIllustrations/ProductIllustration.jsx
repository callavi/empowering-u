import {FloatingCard} from "../../components/FloatingCard/FloatingCard"


export function ProductIllustration ({illustration: Illustration, cards}) {
    return (
        <div className="relative">
        <Illustration />
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