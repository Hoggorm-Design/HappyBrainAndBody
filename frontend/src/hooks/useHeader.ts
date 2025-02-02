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
    staleTime: 1000 * 60 * 5,
  });
};

export default useHeader;
