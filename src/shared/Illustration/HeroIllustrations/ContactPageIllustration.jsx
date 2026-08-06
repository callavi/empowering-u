import ContactIllustration from "./ContactIllustration";
import {FloatingCard} from "../../components/FloatingCard/FloatingCard"


export function ContactPageIllustration ({cards}) {
    return (
        <div className="relative">
        <ContactIllustration />
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