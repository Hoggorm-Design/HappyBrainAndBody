import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

export interface TextOverImageTop {
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      url: string;
      _id: string;
    };
    alt: string;
  };
  profession: string;
  body: string;
}

const useTextOverImageTop = () => {
  const [postData, setPostData] = useState<TextOverImageTop[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTextOverImageTop = async () => {
      try {
        const data: TextOverImageTop[] = await sanityClient.fetch(
          `*[_type=="post"]{
                        title,
                        slug,
                        profession,
                        body 
                    }`,
        );
        setPostData(data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTextOverImageTop();
  }, []);

  return { postData, loading, error };
};

export default useTextOverImageTop;
