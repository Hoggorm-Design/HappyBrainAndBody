import React from 'react';

interface CardProps {
    image: string;
    header: string;
    text: string;
    link: string;
}



const Card: React.FC<CardProps> = ({image, header, text, link}) => {
    return (
        <div className="max-w-screen-lg rounded overflow-hidden shadow-lg bg-white border">
            <img
                className="w-full h-64 object-contain"
                src={image}
                alt={header}
            />

            <div className="px-6 py-4">
                <h2 className="font-bold text-xl mb-2">{header}</h2>
                <p className="text-gray-700 text-base">{text}</p>
                <a href={link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    Read more
                </a>
            </div>
        </div>
    );
};

export default Card;


