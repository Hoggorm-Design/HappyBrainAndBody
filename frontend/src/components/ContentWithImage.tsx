import React from "react";
import "../styles/ContentWithImage.css";

interface ContentWithImageProps {
    title: string;
    imageSrc: string;
    imageAlt: string;
    reverse: boolean;
    bgColour: string;
    children?: React.ReactNode;
}



const ContentWithImage = ({title, imageSrc, imageAlt, reverse, bgColour, children}: ContentWithImageProps) => {
    return(
        <>
            <div className={`content-with-image ${reverse ? "reverse" : ""} items-start flex justify-center`} style={{backgroundColor: bgColour}}>
                <div className="text-content h-full py-20">
                    <h2 className="header font-bold mb-5">{title}</h2>
                    {children}
                </div>
                <div className="image-content h-full items-start py-20">
                    <div style={{justifyContent: reverse ? "start" : "end"}} className="flex items-start h-full">
                        <img src={imageSrc} alt={imageAlt}/>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ContentWithImage;