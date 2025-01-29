import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "@/context/LoadingContext";

interface Header {
  title: string;
}

const useHeader = () => {
  const [headerData, setHeaderData] = useState<Header | null>(null);
  const { setIsLoading } = useLoading();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeader = async () => {
      setIsLoading(true);
      try {
        const data: Header[] = await sanityClient.fetch(
          `*[_type == "header"]{
                        title
                    }`,
        );
        if (data.length > 0) {
          setHeaderData(data[0]);
        } else {
          setHeaderData(null);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch header data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchHeader();
  }, [setIsLoading]);

  return { headerData, error };
};

export default useHeader;
