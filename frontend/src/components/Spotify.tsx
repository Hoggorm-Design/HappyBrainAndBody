// import "../styles/spotify.css"

import useSpotify from "../hooks/useSpotify.ts";


const Spotify = () => {
    const { spotifyData, loading, error } = useSpotify();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!spotifyData) {
        return <p>No Spotify data available.</p>;
    }
    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center overflow-hidden">
                <iframe
                    src="https://open.spotify.com/embed/episode/0Jis0INFCA33ffLmTxBwm8?utm_source=generator"
                    title="Raushetspodden"
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                </iframe>
            </div>
            <div className="text-container">
                <h3 className={"sub-header font-bold mb-1"}>{spotifyData.title}</h3>
                <p className={"text"}>{spotifyData.body}</p>
                <a href={spotifyData.link} className="button" target="_blank">

                </a>
            </div>
        </div>
    )
}
export default Spotify;