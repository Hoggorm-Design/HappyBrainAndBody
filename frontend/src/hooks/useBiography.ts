import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

interface Post {
  title: string;
  mainImage: {
    asset: {
      url: string;
      _id: string;
    };
  };
  profession: string;
  body: string;
  alt: string;
}

const useBiography = () => {
  const [postData, setPostData] = useState<Post[]>([]);
  const { startLoading, stopLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBiography = async () => {
      startLoading();

      try {
        const data: Post[] = await sanityClient.fetch(
          `*[_type=="biography"]{
                        title,
                        mainImage{
                            asset->{
                                _id,
                                url
                            },
                        },
                        alt,
                        profession,
                        body 
                    }`,
        );
        setPostData(data);
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      } finally {
        stopLoading();
      }
    };

    fetchBiography();
  }, [startLoading, stopLoading]);

  return { postData, error };
};

export default useBiography;
