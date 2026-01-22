import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_OFFSET = 80; // px – adjust to your navbar height

function HashScrollHandler() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (!hash) return;

        const id = hash.substring(1);

        // Wait until layout is stable
        requestAnimationFrame(() => {
            const element = document.getElementById(id);
            if (!element) return;

            const elementTop =
                element.getBoundingClientRect().top + window.pageYOffset;

            const offsetPosition = elementTop - NAVBAR_OFFSET;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        });
    }, [hash, pathname]);

    return null;
}

export default HashScrollHandler;