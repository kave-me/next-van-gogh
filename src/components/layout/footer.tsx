import ArrowTopRight from "../icons/arrow-top-right";
import { GoToTopPage } from "../go-to-top-page";

export default function Footer() {
    const links = [
        {
            name: "Linkedin",
            href: "#",
        },
        {
            name: "Dribbble",
            href: "#",
        },
        {
            name: "Myspace",
            href: "#",
        },
        {
            name: "Github",
            href: "#",
        },
        {
            name: "Instagram",
            href: "#",
        },
    ];

    return (
        <footer className="h-5 flex justify-between uppercase mt-[180px] mb-[100px] text-sm font-normal leading-[1.28rem] px-20">
            <a href="mailto:x@vangogh.com">☻@vangogh.com</a>
            <ol className="flex gap-11">
                {links.map((link) => (
                    <li key={link.name} className="">
                        <a className="flex gap-2 items-center" href={link.href}>
                            {link.name} <ArrowTopRight />
                        </a>
                    </li>
                ))}
                <li className="border rounded-full size-6 flex items-center justify-center">
                    <GoToTopPage/>
                </li>
            </ol>
        </footer>
    );
}
