import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

export interface Spotify {
  title: string;
  body: string;
  link: string;
}

const useSpotify = () => {
  const [spotifyData, setSpotifyData] = useState<Spotify | null>(null);
  const [error, setError] = useState<string | null>(null);

  const { setIsLoading } = useLoading();

  useEffect(() => {
    let mounted = true;

    const fetchSpotifyData = async () => {
      setIsLoading(true);

      try {
        const data: Spotify = await sanityClient.fetch(
          `*[_type == "spotify"][0]{
            title,
            body,
            link
          }`,
        );

        if (mounted) {
          setSpotifyData(data || null);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch Spotify data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchSpotifyData();

    return () => {
      mounted = false;
    };
  }, [setIsLoading]);

  return { spotifyData, error };
};

export default useSpotify;
