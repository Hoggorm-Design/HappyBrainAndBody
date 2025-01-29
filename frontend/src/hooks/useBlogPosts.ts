// useBlogPosts.ts
import { useState, useEffect } from "react";
import sanityClient from "../client";

interface BlogPost {
  header: string;
  text: string;
  image: { asset: { url: string } };
  link: string;
  alt: string;
  pdf?: { asset: { url: string } };
  publishedAt: string;
}

const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchBlogPosts = async () => {
      try {
        const data: BlogPost[] = await sanityClient.fetch(
          `*[_type == "blogPost"] | order(publishedAt desc) {
            header,
            text,
            image { asset->{_id, url} },
            link,
            alt,
            pdf { asset->{url} },
            publishedAt
          }`,
        );
        if (mounted) setBlogPosts(data || []);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blog posts");
      }
    };

    fetchBlogPosts();
    return () => {
      mounted = false;
    };
  }, []);

  return { blogPosts, error };
};

export default useBlogPosts;
