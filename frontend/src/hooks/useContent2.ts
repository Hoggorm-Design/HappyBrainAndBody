import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

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
  alt: string;
}

const usePost3 = () => {
  const [postData, setPostData] = useState<Post3 | null>(null);
  const { startLoading, stopLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      startLoading();
      try {
        const data: Post3 = await sanityClient.fetch(
          `*[_type == "post3"]{
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

export default usePost3;
