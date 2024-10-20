import React from 'react';
import useBiography from '../hooks/useBiography.ts';

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
const { postData, loading, error } = useBiography(); // Use the custom hook

if (loading) {
  return <p>Loading posts...</p>;
}

if (error) {
  return <p>{error}</p>;
}

const ContentWithImage2 = ({
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
export default ContentWithImage2;
