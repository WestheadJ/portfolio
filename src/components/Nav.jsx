import React from "react";
import "../index.css"

export default function Nav() {
    const navItems = [
        { label: "About", href: "/#about" },
        { label: "Projects", href: "/#projects" },
        { label: "Contact", href: "/#contact" },
    ];

    return (
        <header>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-900 backdrop-blur-sm border-b border-gray-700 shadow-md bg-opacity-85">
                <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
                    {/* Logo */}
                    <a href="/" className="text-lg font-extralight italic">
                        JW
                    </a>

                    {/* Nav Links */}
                    <div className="hidden sm:flex items-center gap-6">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm sm:text-base font-medium hover:text-amber-400 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    {/* Optional: Mobile menu button for very small screens */}
                    <div className="sm:hidden">
                        {/* Could be a hamburger icon here */}
                    </div>
                </div>
            </nav>
        </header>
    );
}