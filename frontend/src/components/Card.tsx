import React from 'react';

interface CardProps {
    image?: string;
    header: string;
    text: string;
    link?: string; // Optional
    imageDescription?: string;
    pdfFile?: string; // Optional
}

const Card: React.FC<CardProps> = ({ image, header, text, link, imageDescription, pdfFile }) => {
    return (
        <div
            className="flex flex-col md:flex-row w-2/4 rounded-lg overflow-hidden shadow-md bg-white border transform transition duration-300 hover:shadow-lg hover:scale-105 cursor-pointer"
        >

            {/* Image Section */}

                {image && (
                    <div className="flex-shrink-0 md:w-1/2">
                    <img
                        className="w-full h-full object-cover"
                        src={image}
                        alt={imageDescription || `Image for ${header}`}
                    />
                    </div>
                )}


            {/* Content Section */}
            <div className="flex flex-col justify-between flex-1 p-6">
                <div>
                    <h2 className="font-semibold text-lg mb-3 text-gray-800">{header}</h2>
                    <p className="text-gray-600 mb-4">{text}</p>
                </div>

                {/* Links Section */}
                <div className="flex justify-end space-x-4 mt-4">
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-white bg-[#5286A4] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1A5673]/80 transition duration-300"
                        >
                            Les mer...
                        </a>
                    )}
                    {pdfFile && (
                        <a
                            href={pdfFile}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-white bg-[#5286A4] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#1A5673]/80 transition duration-300"
                        >
                            last ned...
                        </a>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Card;
