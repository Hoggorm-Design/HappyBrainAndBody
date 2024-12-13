import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

interface Post {
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

const usePost2 = () => {
    const [postData, setPostData] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data: Post[] = await sanityClient.fetch(
                    `*[_type == "post2"]{
                        title,
                        slug,
                        body,
                        mainImage{
                            asset->{
                                url
                            }
                        }
                    }`
                );
                setPostData(data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch posts');
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { postData, loading, error };
};

export default usePost2;
