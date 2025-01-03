import React from "react";

interface HeaderProps {
    logoSrc: string;
    title: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => {
    return (
        <a href="/" className="flex items-center space-x-4">
            <h1 className="hidden text-[#FFFFFF] md:block text-3xl font-bold">{title}</h1>
            <img src={logoSrc} alt="Logo" className="w-auto h-20 object-contain"/>
        </a>
    );
};

export default Header;
