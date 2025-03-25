import Image from "next/image";
import React from "react";
const resume = [
    {
        location: "Nuenen and Antwerp",
        date: "1883",
        role: "painting intern",
    },
    {
        location: "Paris",
        date: "1886",
        role: "Junior Painter",
    },
    {
        location: "Gauguin's visit",
        date: "1888",
        role: "Experimental artist",
    },
    {
        location: "Saint-Rémy",
        date: "1889",
        role: "Senior Painter",
    },
    {
        location: "Auvers-sur-Oise",
        date: "1890",
        role: "painting studio manager",
    },
];
export default function AboutMe() {
    return (
        <section className="mt-[176px] grid grid-cols-2 justify-items-center px-20">
            <Image src={'/about.png'} className="rounded-20" width={447} height={641} alt="me"  />
            <ol className="flex flex-col text-2xl leading-[1.33em] uppercase gap-y-6 justify-center">
                {resume.map(
                    item => <li key={item.location} className="flex justify-between gap-x-20">
                    <div className="flex flex-col gap-y-1">

                        <span>{item.location}</span>
                        <span className="text-sm font-normal leading-[1.28em]">{item.role}</span>
                    </div>
                    <div className="opacity-40">{item.date}</div>
                </li>
                )}
            </ol>
        </section>
    );
}
