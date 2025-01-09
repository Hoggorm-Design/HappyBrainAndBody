import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor = () => {
    const location = useLocation();
    const lastHash = useRef("");
    const lastPathname = useRef(location.pathname);

    useEffect(() => {
        const scrollToHash = (hash: string, retries = 5) => {
            const element = document.getElementById(hash);

            if (element) {
                const navbarHeight = document.querySelector("nav")?.offsetHeight || 50; // Get the dynamic height of the navbar
                const yOffset = -navbarHeight - 20; // Include extra margin for precise alignment
                const yPosition =
                    element.getBoundingClientRect().top + window.scrollY + yOffset;

                setTimeout(() => {
                    window.scrollTo({ top: yPosition, behavior: "smooth" });
                }, 100); // Delay scrolling for smooth rendering
                lastHash.current = ""; // Clear hash to prevent duplicate scrolling
            } else if (retries > 0) {
                // Retry after a short delay
                setTimeout(() => scrollToHash(hash, retries - 1), 150);
            }
        };

        if (location.hash) {
            const hash = location.hash.slice(1); // Remove '#' from hash
            lastHash.current = hash;
            const isSamePage = lastPathname.current === location.pathname;

            // Add an initial delay for cross-page navigation
            setTimeout(() => scrollToHash(hash, 5), isSamePage ? 0 : 200);
        } else {
            // Scroll to the top if no hash
            window.scrollTo({ top: 0, behavior: "smooth" });
        }

        lastPathname.current = location.pathname; // Update last pathname
    }, [location]);

    return null;
};

export default ScrollToAnchor;