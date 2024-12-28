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
            <section className={`flex content-with-image items-start ${reverse ? "reverse"  : ""}`} style={{backgroundColor: bgColour}}>
                <div className="text-content flex-1 bg-amber-200">
                    <h2 className="header font-semibold mb-5">{title}</h2>
                    {children}
                </div>
                <div className="image-content flex-1 bg-fuchsia" style={{justifyContent: reverse ? "start" : "end"}}>
                    <img src={imageSrc} alt={imageAlt}/>
                </div>
            </section>
        </>

    )
}
export default ContentWithImage;