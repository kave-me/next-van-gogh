import HamburgerMenu from "../icons/hamburger";
import Logo from "../icons/logo";
import ThemeToggle from "../icons/themeToggle";

export default function Navbar() {
    return (
        <nav className={"pt-6 px-8 flex justify-between items-center"}>
            <Logo />
            <div className="flex items-center">
                <ThemeToggle />
                <HamburgerMenu />
            </div>

        </nav>
    );
}
