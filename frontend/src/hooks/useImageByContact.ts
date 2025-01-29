import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

interface ImageByContact {
  mainImage: {
    asset: {
      url: string;
    };
  };
  alt: string;
}

const useImageByContact = () => {
  const [imageData, setImageData] = useState<ImageByContact | null>(null);
  const { setIsLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      setIsLoading(true);
      try {
        const data: ImageByContact = await sanityClient.fetch(
          `*[_type == "imageByContact"][0]{
                        mainImage{
                            asset->{
                                url
                            }
                        },
                        alt
                    }`,
        );
        setImageData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch image by contact data.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchImage();
  }, [setIsLoading]);

  return { imageData, error };
};

export default useImageByContact;
