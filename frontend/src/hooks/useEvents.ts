import { useEffect, useState } from 'react';
import sanityClient from '../client.ts';

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
    const fetchEvents = async () => {
      try {
        const data: Event[] = await sanityClient.fetch(
          `*[_type=="event"]{
                        title,
                        slug,
                        textContent,
                        image{
                            asset->{
                                _id,
                                url
                            },
                            alt
                        },
                        link
                  
                    }`,
        );
        setEventsData(data);
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { eventsData, loading, error };
};

export default useEvents;
