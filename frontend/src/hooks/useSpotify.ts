import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client";

export interface Spotify {
  title: string;
  body: string;
  link: string;
}

const fetchSpotify = async (): Promise<Spotify> => {
  const data = await sanityClient.fetch(
    `*[_type == "spotify"][0]{
      title,
      body,
      link
    }`
  );
  return data;
};

const useSpotify = () => {
  return useQuery<Spotify, Error>({
    queryKey: ["spotify"],
    queryFn: fetchSpotify,
    staleTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 15,
  });
};

export default useSpotify;
