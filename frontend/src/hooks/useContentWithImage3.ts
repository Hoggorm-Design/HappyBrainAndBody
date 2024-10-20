import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

export interface Post3 {
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

const useContentWithImage3 = () => {
  const [postData, setPostData] = useState<Post3[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContentWithImage3 = async () => {
      try {
        const data: Post3[] = await sanityClient.fetch(
          `*[_type=="post"]{
                        title,
                        slug,
                        mainImage{
                            asset->{
                                _id,
                                url
                            },
                            alt
                        },
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

    fetchContentWithImage3();
  }, []);

  return { postData, loading, error };
};

export default useContentWithImage3;
