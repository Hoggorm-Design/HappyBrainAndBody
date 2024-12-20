import { useState, useEffect } from 'react';
import sanityClient from '../client.ts';

interface BlogPost {
    header: string;
    text: string;
    image: {
        asset: {
            url: string;
        }
        };
    link: string;
}

const useBlogPosts = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBlogPosts = async () => {
            try {
                const data: BlogPost[] = await sanityClient.fetch(
                    `*[_type=="blogPost"]{
            header,
            text,
            image{
              asset->{
                _id,
                url
              }
            },
            link
          }`
                );
                setBlogPosts(data);
            } catch (err) {
                setError('Failed to fetch blog posts');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogPosts();
    }, []);

    return { blogPosts, loading, error };
};

export default useBlogPosts;
