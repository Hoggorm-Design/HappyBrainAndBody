import React from 'react';

interface CardProps {
    image: string;
    header: string;
    text: string;
    link: string;
    imageDescription?: string;
}

const Card: React.FC<CardProps> = ({ image, header, text, link, imageDescription }) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <div
                className="flex flex-col md:flex-row max-w-screen-lg rounded-lg overflow-hidden shadow-md bg-white border transform transition duration-300 hover:shadow-lg hover:scale-105 cursor-pointer">
                {/* Image Section */}
                <div className="flex-shrink-0 md:w-1/2">
                    <img
                        className="w-full h-full object-cover"
                        src={image}
                        alt={imageDescription}
                    />
                    <p className="text-gray-500 text-sm text-center px-2 py-1">{header}</p>
                    {imageDescription && (
                        <p className="text-gray-400 text-xs text-center px-4">{imageDescription}</p>
                    )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-between flex-1 p-6">
                    <div>
                        <h2 className="font-semibold text-lg mb-3 text-gray-800">{header}</h2>
                        <p className="text-gray-600 mb-4">{text}</p>
                    </div>
                </div>
            </div>
        </a>
)
    ;
};

export default Card;
