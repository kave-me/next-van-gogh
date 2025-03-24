import Image from "next/image";
import { FunctionComponent } from "react";
import ArrowRight from "./icons/arrow-right";

interface CardProps {
    title: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    number: number;
}

export const Artwork: FunctionComponent<CardProps> = ({
    title,
    href,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    number,
}) => {
    return (
        <div>
            <Image
                width={imageWidth}
                height={imageHeight}
                src={imageSrc}
                alt={imageAlt}
                className="rounded-20 object-cover"
                style={{ aspectRatio: imageWidth / imageHeight }}
            />
            <a href={href} className="flex gap-8 items-center mt-3 text-sm font-normal uppercase">
                <span className="opacity-40">{number}</span>
                <span>{title}</span>

                <ArrowRight />
            </a>
        </div>
    );
};
