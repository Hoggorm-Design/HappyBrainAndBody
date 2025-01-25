import useSpotify from "../hooks/useSpotify";
import { useState, useEffect } from "react";

const Spotify = () => {
  const { spotifyData, loading, error } = useSpotify();
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (!iframeLoaded && !iframeError) {
      const progressInterval = setInterval(() => {
        setLoadingProgress((prev) => Math.min(prev + 10, 90));
      }, 1000);

      const timeoutId = setTimeout(() => {
        if (!iframeLoaded) {
          console.log("Iframe loading timed out after 15 seconds");
          setIframeError(true);
          setLoadingProgress(100);
        }
      }, 15000);

      return () => {
        clearTimeout(timeoutId);
        clearInterval(progressInterval);
      };
    }
  }, [iframeLoaded, iframeError]);

  const handleIframeLoad = () => {
    console.log("Iframe loaded successfully");
    setIframeLoaded(true);
    setIframeError(false);
    setLoadingProgress(100);
  };

  const handleIframeError = () => {
    console.log("Iframe failed to load");
    setIframeError(true);
    setIframeLoaded(false);
  };

  const getEpisodeId = (link: string) => {
    const parts = link.split("/");
    return parts[parts.length - 1].split("?")[0];
  };

  let episodeId = "";
  if (spotifyData?.link) {
    episodeId = getEpisodeId(spotifyData.link);
  }

  const embedUrl = `https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator`;

  useEffect(() => {
    if (embedUrl) {
      const preloadLink = document.createElement("link");
      preloadLink.rel = "preload";
      preloadLink.as = "document";
      preloadLink.href = embedUrl;
      document.head.appendChild(preloadLink);

      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [embedUrl]);

  if (loading) {
    return (
      <div className="w-full h-[352px] flex items-center justify-center bg-gray-50">
        <p>Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[352px] flex items-center justify-center bg-gray-50">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!spotifyData) {
    return (
      <div className="w-full h-[352px] flex items-center justify-center bg-gray-50">
        <p>No Spotify data available.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-lg overflow-hidden">
      <div className="flex flex-col">
        <div className="max-w-[350px] h-[200px] lg:h-[230px] flex justify-end">
          {!iframeLoaded && !iframeError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50">
              <p className="mb-2">Loading episode... {loadingProgress}%</p>
              <div className="w-48 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
            </div>
          )}

          {iframeError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <p className="mb-2">Failed to load episode</p>
                <a
                  href={spotifyData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Listen on Spotify ›
                </a>
              </div>
            </div>
          ) : (
            <iframe
              src={embedUrl}
              title="Raushetspodden"
              className="w-full h-full"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="eager" // Changed to eager loading
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{
                border: "none",
                display: iframeLoaded ? "block" : "none",
              }}
            />
          )}
        </div>

        <div className="text-container mt-[-15px] max-w-[350px]">
          <h3 className="sub-header font-bold">{spotifyData.title}</h3>
          <p className="text">{spotifyData.body}</p>
          <a
            href={spotifyData.link}
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Hør mer ›
          </a>
        </div>
      </div>
    </div>
  );
};

export default Spotify;
