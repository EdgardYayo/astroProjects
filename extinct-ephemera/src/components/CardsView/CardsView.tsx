import { useState } from 'react';
import type { CardItem } from '../../types/types';
import './CardsView.css';

interface CardsViewProps {
    cards: CardItem[]
}

export default function CardsView({ cards }: CardsViewProps) {
    return (
        <div>
            <div className="cardsView">
                { cards.map((card, index) => {
                    return index < 3 ? <CardView key={index} {...card} /> : null
                })}
            </div>
        </div>
    )
}

function CardView({ title, description, image }: CardItem){
    const [borderColor, setBorderColor] = useState<string>("white")
    return (
        <div className="card">
            <div className="image">
                <img 
                    onClick={() => setBorderColor("#0B3C91")} 
                    onDoubleClick={() => setBorderColor("white")}
                    src={image} 
                    style={{ borderColor: `${borderColor}`}} 
                />
            </div>
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    )
}