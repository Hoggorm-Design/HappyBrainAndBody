import { useEffect, useState } from 'react';
import sanityClient from '../client.ts';
import { Post } from './useBiography.ts';

export interface Event {
  header: string;
  slug: {
    current: string;
  };
  textContent: string;
  image: {
    asset: {
      url: string;
      _id: string;
    };
    alt: string;
  };
  link: string;
}

const useEvents = () => {
  const [eventsData, setEventsData] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBiography = async () => {
      try {
        const data: Event[] = await sanityClient.fetch(
          `*[_type=="event"]{
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

    fetchBiography();
  }, []);

  return { postData, loading, error };
};

export default useBiography;
