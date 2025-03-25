import React from "react";
import ThemeToggle from 'components/icons/themeToggle'
import HamburgerMenu from "components/icons/hamburger";
import Logo from "components/icons/logo";
export function Navbar() {
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
