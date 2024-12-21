import React from "react";

interface HeaderProps {
    logoSrc: string;
    title: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => {
    return (
        <div className="flex items-center space-x-4">
            <img src={logoSrc} alt="Logo" className="h-10" />
            <h1 className="hidden md:block text-2xl font-bold">{title}</h1>
        </div>
    );
};

export default Header;
