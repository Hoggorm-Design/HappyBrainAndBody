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
            <section id={id} className={`flex content-with-image items-start ${reverse ? "reverse"  : ""} items-start flex justify-center`} style={{backgroundColor: bgColour}}>
                <div className="text-content flex-1 bg-white h-full py-20">
                    <h2 className="header font-semibold mb-5">{title}</h2>
                    {children}
                </div>
                <div className="image-content h-full items-start py-20">
                    <div style={{justifyContent: reverse ? "start" : "end"}} className="flex items-start h-full">
                        <img src={imageSrc} alt={imageAlt}/>
                    </div>
                </div>
            </section>
        </>

    )
}
export default ContentWithImage;