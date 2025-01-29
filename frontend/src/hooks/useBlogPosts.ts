import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

interface BlogPost {
  header: string;
  text: string;
  image: {
    asset: {
      url: string;
    };
  };
  link: string;
  alt: string;
  pdf?: {
    asset: {
      url: string;
    };
  };
  publishedAt: string;
}

const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[] | null>(null);
  const { startLoading, stopLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      startLoading();
      try {
        // Modify the query to fetch posts ordered by the publish date in descending order
        const data: BlogPost[] = await sanityClient.fetch(
          `*[_type == "blogPost"] | order(publishedAt desc) {
                        header,
                        text,
                        image {
                            asset->{
                                _id,
                                url
                            }
                        },
                        link,
                        alt,
                        pdf {
                            asset->{
                                url
                            }
                        },
                        publishedAt
                    }`,
        );
        setBlogPosts(data);
      } catch (err) {
        setError("Failed to fetch blog posts");
        console.error(err);
      } finally {
        stopLoading();
      }
    };

    fetchBlogPosts();
  }, [startLoading, stopLoading]);

  return { blogPosts, error };
};

export default useBlogPosts;
