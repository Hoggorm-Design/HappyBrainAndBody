import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

export interface BlogPage {
    header: string;
    text: string;
}

const useBlogPage = () => {
    const [blogPageData, setBlogPageData] = useState<BlogPage | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPage = async () => {
            try {
                const data: BlogPage | null = await sanityClient.fetch(
                    `*[_type == "blogPage"][0]{
                        header,
                        text
                    }`
                );
                setBlogPageData(data);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch blog page data');
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPage();
    }, []);

    return { blogPageData, loading, error };
};

export default useBlogPage;
