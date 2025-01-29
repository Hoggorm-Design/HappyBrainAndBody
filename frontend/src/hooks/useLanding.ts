import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

interface LandingData {
  header: string;
  subheader: string;
  introText: string;
  additionalText: string;
  image: {
    asset: {
      url: string;
    };
  };
  alt: string;
}

const useLanding = () => {
  const [landingData, setLandingData] = useState<LandingData | null>(null);
  const { startLoading, stopLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLandingData = async () => {
      startLoading();
      try {
        const data: LandingData[] = await sanityClient.fetch(
          `*[_type == "landing"]{
            header,
            subheader,
            introText,
            additionalText,
            image{
              asset->{
                _id,
                url
              }
            },
            alt
          }`,
        );
        setLandingData(data[0] || null);
      } catch (err) {
        setError("Failed to fetch landing page data");
        console.error(err);
      } finally {
        stopLoading();
      }
    };

    fetchLandingData();
  }, [startLoading, stopLoading]);

  return { landingData, error };
};

export default useLanding;
