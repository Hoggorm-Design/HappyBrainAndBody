import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

export interface Post2 {
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

const useContentWithImage2 = () => {
  const [postData, setPostData] = useState<Post2[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContentWithImage2 = async () => {
      try {
        const data: Post2[] = await sanityClient.fetch(
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

    fetchContentWithImage2();
  }, []);

  return { postData, loading, error };
};

export default useContentWithImage2;
