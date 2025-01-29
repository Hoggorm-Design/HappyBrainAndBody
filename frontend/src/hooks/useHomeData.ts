import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

interface Post {
  title: string;
  slug?: { current: string }; // Only some posts may have a slug
  body: string;
  mainImage: {
    asset: { url: string };
  };
  alt: string;
}

interface Event {
  title: string;
  slug: { current: string };
  body: string;
  image: {
    asset: { url: string };
  };
  link: string;
  alt: string;
}

interface Landing {
  header: string;
  subheader: string;
  introText: string;
  additionalText: string;
  image: {
    asset: { url: string };
  };
  alt: string;
}

interface HomeData {
  post1: Post[];
  post2: Post | null;
  post3: Post | null;
  landing: Landing | null;
  events: Event[];
}

const useHomeData = () => {
  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { setIsLoading } = useLoading();

  useEffect(() => {
    let mounted = true;

    const fetchAllData = async () => {
      setIsLoading(true);

      try {
        // Fetch all required data in parallel for better performance
        const [post1, post2, post3, landing, events] = await Promise.all([
          sanityClient.fetch(
            `*[_type == "post2"]{ title, body, mainImage{ asset->{url} }, alt }`,
          ),
          sanityClient.fetch(
            `*[_type == "post3"][0]{ title, body, mainImage{ asset->{url} }, alt }`,
          ),
          sanityClient.fetch(
            `*[_type == "post4"][0]{ title, body, mainImage{ asset->{url} }, alt }`,
          ),
          sanityClient.fetch(
            `*[_type == "landing"][0]{ header, subheader, introText, additionalText, image{ asset->{url} }, alt }`,
          ),
          sanityClient.fetch(
            `*[_type == "event"]{ title, slug, body, image{ asset->{url} }, link, alt }`,
          ),
        ]);

        if (mounted) {
          setHomeData({ post1, post2, post3, landing, events });
        }
      } catch (err) {
        console.error("Error fetching homepage data:", err);
        setError("Failed to fetch homepage data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllData();

    return () => {
      mounted = false; // Prevent setting state on unmounted component
    };
  }, [setIsLoading]);

  return { homeData, error };
};

export default useHomeData;
