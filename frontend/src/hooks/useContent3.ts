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

const usePost4 = () => {
  const [postData, setPostData] = useState<Post | null>(null);
  const { startLoading, stopLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      startLoading();
      try {
        const data: Post = await sanityClient.fetch(
          `*[_type == "post4"]{
                        title,
                        body,
                        mainImage{
                            asset->{
                                url
                            }
                        },
                        alt
                    }[0]`,
        );
        setPostData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch post data");
      } finally {
        stopLoading();
      }
    };

    fetchPostData();
  }, [startLoading, stopLoading]);

  return { postData, error };
};

export default usePost4;
