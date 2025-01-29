import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

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
  alt: string;
}

const useEvent = () => {
  const [eventData, setEventData] = useState<Event[]>([]);
  const { startLoading, stopLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      startLoading();
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
          }`,
        );
        setEventData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch events");
      } finally {
        stopLoading();
      }
    };

    fetchEvents();
  }, [startLoading, stopLoading]);

  return { eventData, error };
};

export default useEvent;
