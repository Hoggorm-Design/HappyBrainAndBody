import React from 'react';

interface CardProps {
    image: string;
    header: string;
    text: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ image, header, text, link }) => {
    return (
        <a
            href={link}
            className="block max-w-screen-lg rounded-lg overflow-hidden shadow-md bg-white border transform transition duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                className="w-full h-96 object-cover"
                src={image}
                alt={header}
            />
            <div className="px-6 py-4">
                <h2 className="font-semibold sub-header mb-3 text-gray-800">{header}</h2>
                <p className="text-gray-600 text">{text}</p>
            </div>
        </a>
    );
};

export default Card;