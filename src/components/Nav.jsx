import React from "react";

export default function Nav() {
    const navItems = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Experience", href: "#experience" },
        { label: "Contact", href: "#contact" },
    ];


    return (
        <header>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 backdrop-blur-sm border-b border-gray-700 shadow-md">
                <a href="/" className="text-lg font-extralight px-4 py-3 inline-block italic">JW</a>

                <a href="#about">About</a>
            </nav>
        </header>
    );
}