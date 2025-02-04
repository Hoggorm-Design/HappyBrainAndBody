import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client";

interface ImageByContact {
  mainImage: {
    asset: {
      url: string;
    };
  };
  alt: string;
}

const fetchImageByContact = async (): Promise<ImageByContact> => {
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
  return data;
};

const useImageByContact = () => {
  return useQuery<ImageByContact, Error>({
    queryKey: ["imageByContact"],
    queryFn: fetchImageByContact,
    staleTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 15,
  });
};

export default useImageByContact;
