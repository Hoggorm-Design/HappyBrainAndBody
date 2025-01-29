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
  const { startLoading, stopLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      startLoading();
      try {
        const data: Spotify = await sanityClient.fetch(
          `*[_type == "spotify"][0]{   // Fetch a single object
                        title,
                        body,
                        link
                    }`,
        );
        setSpotifyData(data || null);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch Spotify data");
      } finally {
        stopLoading();
      }
    };

    fetchSpotifyData();
  }, [startLoading, stopLoading]);

  return { spotifyData, error };
};

export default useSpotify;
