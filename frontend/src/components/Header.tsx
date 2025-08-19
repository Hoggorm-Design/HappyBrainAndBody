import React from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  logoSrc: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, title }) => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <a href="/" onClick={handleLogoClick} className="flex items-center">
      <img src={logoSrc} alt="Logo" className="w-auto h-20 object-contain" />
      <h1 className="text-[#FFFFFF] md:block text-3xl font-bold">{title}</h1>
    </a>
  );
};

export default Header;
