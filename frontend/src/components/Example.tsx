interface ExampleProps {
    title: string;
    buttonText: string;
    buttonLink: string;
    imageSrc: string;
    imageAlt: string;
    info: string;
}

const Example = ({ title, buttonText, buttonLink, imageSrc, imageAlt, info }: ExampleProps) => {
    return (
        <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
            {/* Image container */}
            <div className="w-full flex justify-center md:justify-start">
                <img
                    className="w-auto object-contain"
                    src={imageSrc}
                    alt={imageAlt}
                />
            </div>

            {/* Text container */}
            <div>
                <h3 className="sub-header font-bold mb-1">{title}</h3>
                <p className="text">{info}</p>
                <a
                    href={buttonLink}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {buttonText} &rsaquo;
                </a>
            </div>
        </div>
    );
};

export default Example;
