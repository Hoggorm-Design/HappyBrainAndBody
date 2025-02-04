import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client";

interface Header {
  title: string;
}

const fetchHeader = async (): Promise<Header[]> => {
  const data = await sanityClient.fetch(
    `*[_type == "header"]{
                  title
              }`
  );
  return data;
};

const useHeader = () => {
  return useQuery<Header[], Error>({
    queryKey: ["header"],
    queryFn: fetchHeader,
    staleTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 15,
  });
};

export default useHeader;
