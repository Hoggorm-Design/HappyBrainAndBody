import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

export interface TextOverImageBottom {
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

const useTextOverImageBottom = () => {
  const [postData, setPostData] = useState<TextOverImageBottom[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTextOverImageBottom = async () => {
      try {
        const data: TextOverImageBottom[] = await sanityClient.fetch(
          `*[_type=="post"]{
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

    fetchTextOverImageBottom();
  }, []);

  return { postData, loading, error };
};

export default useTextOverImageBottom;