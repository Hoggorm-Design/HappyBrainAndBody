import React from "react";

interface HeaderProps {
    logoSrc: string;
    title: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => {
    return (
        <div className="flex items-center space-x-4">
            <h1 className="hidden text-white md:block text-3xl font-bold">{title}</h1>
            <img src={logoSrc} alt="Logo" className="h-20"/>
        </div>
    );
};

export default Header;
