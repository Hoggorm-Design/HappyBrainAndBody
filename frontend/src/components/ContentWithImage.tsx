import React from "react";
import "../styles/ContentWithImage.css";

interface ContentWithImageProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    reverse: boolean;
    bgColour: string;
    children?: React.ReactNode;
    id: string;
}



const ContentWithImage = ({title, imageSrc, imageAlt, reverse, bgColour, children, id}: ContentWithImageProps) => {
    return(
        <>
            <section
                id={id}
                className={`flex content-with-image items-start p-[30px] 2xl:px-[100px] mt-[-100px]  ${
                    reverse ? "reverse" : ""
                } justify-center`}
                style={{backgroundColor: bgColour}}
            >
                {/* Text Content */}
                <div className="text-content flex-1 bg-white ">
                    <h2 className="header font-semibold mb-5">{title}</h2>
                    {children}
                </div>

                {/* Image Content */}
                <div className="image-content flex items-start">
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        className="self-start max-h-[400px] object-contain"
                    />
                </div>
            </section>

        </>


    )
}
export default ContentWithImage;