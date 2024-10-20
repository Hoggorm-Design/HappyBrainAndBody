// import "../styles/spotify.css"

interface SpotifyProps {
    title: string,
    buttonText: string,
    buttonLink: string,
    info: string,
}

const Spotify = ({title, buttonText, buttonLink, info}: SpotifyProps) => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center overflow-hidden">
                <iframe
                    src="https://open.spotify.com/embed/episode/0Jis0INFCA33ffLmTxBwm8?utm_source=generator"
                    title="Raushetspodden"
                    width="100%"
                    height="352"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
            </div>
            <div className="text-container">
                <h3 className={"sub-header font-bold mb-1"}>{title}</h3>
                <p className={"text"}>{info}</p>
                <a href={buttonLink} className="button" target="_blank">
                    {buttonText} &rsaquo;
                </a>
            </div>
        </div>
    )
}
export default Spotify;