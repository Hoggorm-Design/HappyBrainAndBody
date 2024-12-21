import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

interface Event {
    title: string;
    slug: {
        current: string;
    };
    body: string;
    image: {
        asset: {
            url: string;
        };
    };
    link: string;
    alt:string;
}

const useEvent = () => {
    const [eventData, setEventData] = useState<Event[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const data: Event[] = await sanityClient.fetch(
                    `*[_type == "event"]{
            title,
            slug,
            body,
            image{
              asset->{
                url
              }
            },
            link,
            alt
          }`
                );
                setEventData(data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch events');
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return { eventData, loading, error };
};

export default useEvent;
