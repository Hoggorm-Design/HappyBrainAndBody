import { useState, useEffect } from 'react';
import sanityClient from '../client';

interface LandingData {
    header: string;
    introText: string;
    additionalText: string;
    image: {
        asset: {
            url: string;
        }
    }
    alt: string;
}

const useLanding = () => {
    const [landingData, setLandingData] = useState<LandingData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLandingData = async () => {
            try {
                const data: LandingData[] = await sanityClient.fetch(
                    `*[_type == "landing"]{
            header,
            introText,
            additionalText,
            image{
              asset->{
                _id,
                url
              }
            },
            alt
          }`
                );
                setLandingData(data[0] || null);
            } catch (err) {
                setError('Failed to fetch landing page data');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchLandingData();
    }, []);

    return { landingData, loading, error };
};

export default useLanding;
