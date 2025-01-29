import { useState, useEffect } from "react";
import sanityClient from "../client";

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
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBiography = async () => {
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
        setLoading(false);
      }
    };

    fetchBiography();
  }, []);

  return { postData, loading, error };
};

export default useBiography;
