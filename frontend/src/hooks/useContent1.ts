import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

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
  alt: string;
}

const usePost2 = () => {
  const [postData, setPostData] = useState<Post[]>([]);
  const { startLoading, stopLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      startLoading();
      try {
        const data: Post[] = await sanityClient.fetch(
          `*[_type == "post2"]{
                        title,                       
                        body,
                        mainImage{
                            asset->{
                                url
                            }
                        },
                        alt
                    }`,
        );
        setPostData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch posts");
      } finally {
        stopLoading();
      }
    };

    fetchPosts();
  }, [startLoading, stopLoading]);

  return { postData, error };
};

export default usePost2;
