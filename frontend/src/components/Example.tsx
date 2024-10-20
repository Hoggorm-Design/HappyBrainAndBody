
interface ExampleProps {
    title: string,
    buttonText: string,
    buttonLink: string,
    imageSrc: string,
    imageAlt: string
    info: string;
}

const Example = ({title, buttonText, buttonLink, imageSrc, imageAlt, info}: ExampleProps) => {

    return (
        <>
            <div className="container">
                <div className="img-container">
                    <img className="image" src={imageSrc} alt={imageAlt}/>
                </div>
                <div className="text-container">
                    <h3>{title}</h3>
                    <p>{info}</p>
                    <a href={buttonLink} className="button" target="_blank">
                        {buttonText} &rsaquo;
                    </a>
                </div>
            </div>
        </>
    )
}
export  default Example;