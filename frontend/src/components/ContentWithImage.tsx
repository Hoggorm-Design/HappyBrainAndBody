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
            <div className={`content-with-image ${reverse ? "reverse" : ""}`} style={{backgroundColor: bgColour}}>
                <div className="text-content">
                    <h2 className="header font-bold mb-5">{title}</h2>
                    {children}
                </div>
                <div className="image-content" style={{justifyContent: reverse ? "start" : "end"}}>
                    <img src={imageSrc} alt={imageAlt}/>
                </div>
            </div>
        </>

    )
}
export default ContentWithImage;