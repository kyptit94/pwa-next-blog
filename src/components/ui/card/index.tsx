import { CardInterface } from './card.interface';
import Link from 'next/link';
import Image from './image';
import Title from './title';
import Expert from './expert';

export default function Card({ title, image, expert, path, className }: CardInterface) {
    return (
        <div className={className}>
            <Link href={path}>
                <Image image={image} />
                <div className="p-6">
                    <Title title={title} />
                    <Expert expert={expert} />
                </div>
            </Link>
        </div>
    );
}