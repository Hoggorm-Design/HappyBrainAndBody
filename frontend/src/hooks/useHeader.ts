import { useState, useEffect } from 'react';
import sanityClient from '../client';

interface Header {
    title: string;
}

const useHeader = () => {
    const [headerData, setHeaderData] = useState<Header | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchHeader = async () => {
            try {
                const data: Header[] = await sanityClient.fetch(
                    `*[_type == "header"]{
                        title
                    }`
                );
                if (data.length > 0) {
                    setHeaderData(data[0]);
                } else {
                    setHeaderData(null);
                }
            } catch (err) {
                console.error(err);
                setError('Failed to fetch header data');
            } finally {
                setLoading(false);
            }
        };

        fetchHeader();
    }, []);

    return { headerData, loading, error };
};

export default useHeader;
