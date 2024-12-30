import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

export interface Spotify {
    title: string;
    body: string;
    link: string;
}

const useSpotify = () => {
    const [spotifyData, setSpotifyData] = useState<Spotify | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSpotifyData = async () => {
            try {
                const data: Spotify = await sanityClient.fetch(
                    `*[_type == "spotify"][0]{   // Fetch a single object
                        title,
                        body,
                        link
                    }`
                );
                setSpotifyData(data || null);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch Spotify data');
            } finally {
                setLoading(false);
            }
        };

        fetchSpotifyData();
    }, []);

    return { spotifyData, loading, error };
};

export default useSpotify;
