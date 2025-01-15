import useSpotify from "../hooks/useSpotify";
import axios from "axios";
import { useEffect, useState } from "react";

const Spotify = () => {
  const { spotifyData, loading, error } = useSpotify();
  const [spotifyError, setSpotifyError] = useState(false);

  useEffect(() => {
    if (spotifyData?.link) {
      checkLink(spotifyData.link);
    }
  }, [spotifyData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!spotifyData) {
    return <p>No Spotify data available.</p>;
  }

  const checkLink = async (url: string) => {
    try {
      const response = await axios.get(url, { timeout: 5000 });
      if (response.status >= 200 && response.status < 400) {
        setSpotifyError(true);
      } else {
        console.log(`⚠️ URL responded with a status code: ${response.status}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.code === "ECONNABORTED") {
          console.log("❌ Request timed out.");
        } else if (error.response) {
          console.log(
            `❌ URL responded with error: ${error.response.status} ${error.response.statusText}`,
          );
        } else {
          console.log(`❌ Failed to connect: ${error.message}`);
        }
      } else {
        console.log(`❌ An unexpected error occurred: ${String(error)}`);
      }
      setSpotifyError(true);
    }
  };

  return (
    <div>
      {!spotifyError && <p>Spotify episode not available</p>}
      <div className="flex flex-col gap-5">
        <div className="flex justify-center items-center overflow-hidden">
          <iframe
            src="https://open.spotify.com/embed/episode/0Jis0INFCA33ffLmTxBwm8?utm_source=generator"
            title="Raushetspodden"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
        <div className="text-container">
          <h3 className="sub-header font-bold mb-1">{spotifyData.title}</h3>
          <p className="text">{spotifyData.body}</p>
          <a href={spotifyData.link} className="button" target="_blank">
            Hør mer ›
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
