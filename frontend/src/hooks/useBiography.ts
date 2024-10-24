// useBiography.ts
import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

interface Post {
    title: string;
    slug: {
        current: string;
    };
    mainImage: {
        asset: {
            url: string;
            _id: string;
        };
        alt: string;
    };
    profession: string;
    body: string;
}

const useBiography = () => {
    const [postData, setPostData] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBiography = async () => {
            try {
                const data: Post[] = await sanityClient.fetch(
                    `*[_type=="post"]{
                        title,
                        slug,
                        mainImage{
                            asset->{
                                _id,
                                url
                            },
                            alt
                        },
                        profession,
                        body 
                    }`
                );
                setPostData(data);
            } catch (err) {
                setError("Failed to fetch data");
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBiography();
    }, []);

    return { postData, loading, error };
};

export default useBiography;