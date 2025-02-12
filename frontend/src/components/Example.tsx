interface ExampleProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  info: string;
}

const Example = ({
  title,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  info,
}: ExampleProps) => {
  return (
    <div className="flex flex-col items-center text-left max-w-[350px] gap-5">
      {/* Image container */}
      <div className="w-full h-auto aspect-video overflow-hidden flex justify-center md:justify-start">
        <img
          className="w-full h-auto object-cover"
          src={imageSrc}
          alt={imageAlt}
        />
      </div>

      {/* Text container */}
      <div className="w-full">
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
