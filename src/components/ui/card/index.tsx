import { CardInterface } from './card.interface';
import Image from './image';
import Title from './title';
import Expert from './expert';

export default function Card({ title, image, expert, className }: CardInterface) {
    return (
        <div className={className}>
            <Image image={image} />
            <div className="p-6">
                <Title title={title} />
                <Expert expert={expert} />
            </div>
        </div>
    );
}