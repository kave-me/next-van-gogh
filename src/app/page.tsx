import { Navbar } from "components/app/components/layout/navbar";
import { Footer } from "components/app/components/layout/footer";
import { ArtGallery } from "./components/art-gallery";
import { MoreSection } from "./components/MoreSection";
import AboutMe from "./components/home/about-me";

export default function Home() {
    const artWorks = [
        {
            title: "The Starry Night",
            href: "/artwork/name1",
            imageSrc: "/artworks/1.png",
            imageAlt: "name1",
            imageWidth: 448,
            imageHeight: 448,
        },
        {
            title: "The Night Café",
            href: "/artwork/name2",
            imageSrc: "/artworks/2.png",
            imageAlt: "name2",
            imageWidth: 448,
            imageHeight: 340,
        },
        {
            title: "The Red Vineyard",
            href: "/artwork/name3",
            imageSrc: "/artworks/3.png",
            imageAlt: "name3",
            imageWidth: 352,
            imageHeight: 352,
        },
        {
            title: "Ward in the Hospital in Arles",
            href: "/artwork/name4",
            imageSrc: "/artworks/4.png",
            imageAlt: "name4",
            imageWidth: 448,
            imageHeight: 620,
        },
        {
            title: "Ploughman in the Fields near Arles",
            href: "/artwork/name5",
            imageSrc: "/artworks/5.png",
            imageAlt: "name5",
            imageWidth: 448,
            imageHeight: 340,
        },
        {
            title: "Paul Gauguin's Armchair",
            href: "/artwork/name6",
            imageSrc: "/artworks/6.png",
            imageAlt: "name6",
            imageWidth: 544,
            imageHeight: 544,
        },
    ];

    return (
        <div>
            <Navbar />
            <header className="mt-[120px]">
                <h1 className="text-title px-20">
                    Vincent Van Gogh. <br />
                    post-impressionist <br />
                    painter and artist
                    <br />
                </h1>
                <ArtGallery artworks={artWorks} />
            </header>

            <MoreSection />
            <AboutMe/>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
            <Footer />
        </div>
    );
}
