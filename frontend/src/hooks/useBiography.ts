import { useQuery } from "@tanstack/react-query";
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

const fetchBiography = async (): Promise<Post[]> => {
  const data = await sanityClient.fetch(
    `*[_type=="biography"]{
      title,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      alt,
      profession,
      body 
    }`
  );
  // Return the fetched data
  return data;
};

const useBiography = () => {
  return useQuery<Post[], Error>({
    queryKey: ["biography"],
    queryFn: fetchBiography,
    staleTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 15,
  });
};

export default useBiography;
