import React from 'react';
import useContentWithImage2 from '../hooks/useContentWithImage2.ts';

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

const ContentWithImage2 = ({
  buttonText,
  buttonLink,
  reverse,
}: ContentWithImageProps) => {
  const { postData, loading, error } = useContentWithImage2(); // Use the custom hook

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {postData.map(post => (
        <div
          key={post.slug.current}
          className={`content-with-image ${reverse ? 'reverse' : ''}`}
        >
          <div className='text-content'>
            <h2>{post.title}</h2>
            <slot />
            <a href={buttonLink} className='button'>
              {buttonText} &rsaquo;
            </a>
          </div>
          <div className='image-content'>
            <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
          </div>
        </div>
      ))}
    </>
  );
};
export default ContentWithImage2;
