import { FunctionComponent } from "react";
import { Artwork } from "./artwork";

interface GalleryProps {
    artworks: Array<{
        title: string;
        href: string;
        imageSrc: string;
        imageAlt: string;
        imageWidth: number;
        imageHeight: number;
    }>;
}

export const ArtGallery: FunctionComponent<GalleryProps> = ({ artworks }) => {
    const rows = Math.ceil(artworks.length / 2);
    const gridTemplateRows = `repeat(${rows}, 80%) 20%`;

    return (
        <section className={`my-28 grid gap-8 gap-y-12 grid-rows-[${gridTemplateRows}] grid-cols-2 px-20`}>
            {artworks.map((artwork, index) => (
                <Artwork
                    key={index}
                    title={artwork.title}
                    href={artwork.href}
                    imageSrc={artwork.imageSrc}
                    imageAlt={artwork.imageAlt}
                    imageWidth={artwork.imageWidth}
                    imageHeight={artwork.imageHeight}
                    number={index+1}
                />
            ))}
        </section>
    );
};


