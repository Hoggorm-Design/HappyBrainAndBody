import useScrollFadeIn from '../hooks/useScrollFadeIn';
import React from "react";

function ScrollFadeInSection({ children, className }: { children: React.ReactNode; className?: string }) {
    const [ref, isVisible] = useScrollFadeIn();

    return (
        <div
            ref={ref}
            className={`${className} ${isVisible ? 'fade-in' : ''}`}
        >
            {children}
        </div>
    );
}

export default ScrollFadeInSection;
