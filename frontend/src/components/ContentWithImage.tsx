
import React from 'react';

interface ContentWithImageProps {
  title: string;
  buttonText: string;
  buttonLink: string;
  imageSrc: string;
  imageAlt: string;
  reverse: boolean;
  id: string;
  children?: React.ReactNode;
}

const ContentWithImage = ({
  title,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  reverse,
  id,
}: ContentWithImageProps) => {
  return (
    <>
      <div id={id} className={`content-with-image ${reverse ? 'reverse' : ''}`}>
        <div className='text-content'>
          <h2>{title}</h2>
          <slot />
          <a href={buttonLink} className='button'>
            {buttonText} &rsaquo;
          </a>
        </div>
        <div className='image-content'>
          <img src={imageSrc} alt={imageAlt} />
        </div>
      </div>
    </>
  );
};
export default ContentWithImage;
