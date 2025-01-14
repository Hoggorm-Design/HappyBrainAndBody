import { useState, useEffect } from "react";
import sanityClient from "../client";

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
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const data: ImageByContact = await sanityClient.fetch(
                    `*[_type == "imageByContact"][0]{
                        mainImage{
                            asset->{
                                url
                            }
                        },
                        alt
                    }`
                );
                setImageData(data);
            } catch (err) {
                console.error(err);
                setError("Failed to fetch image by contact data.");
            } finally {
                setLoading(false);
            }
        };

        fetchImage();
    }, []);

    return { imageData, loading, error };
};

export default useImageByContact;
