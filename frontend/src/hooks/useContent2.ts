import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

interface Post3 {
    title: string;
    slug: {
        current: string;
    };
    body: string;
    mainImage: {
        asset: {
            url: string;
        };
    };
}

const usePost3 = () => {
    const [postData, setPostData] = useState<Post3 | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPostData = async () => {
            try {
                const data: Post3 = await sanityClient.fetch(
                    `*[_type == "post3"]{
                        title,
                        slug,
                        body,
                        mainImage{
                            asset->{
                                url
                            }
                        }
                    }[0]`
                );
                setPostData(data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch post data');
            } finally {
                setLoading(false);
            }
        };

        fetchPostData();
    }, []);

    return { postData, loading, error };
};

export default usePost3;
