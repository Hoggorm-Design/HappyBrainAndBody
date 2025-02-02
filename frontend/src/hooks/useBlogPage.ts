// useBlogPage.ts
import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client";

export interface BlogPage {
  header: string;
  text: string;
}

const fetchBlogPage = async (): Promise<BlogPage> => {
  const data = await sanityClient.fetch(
    `*[_type == "blogPage"][0]{ header, text }`
  );
  return data;
};

const useBlogPage = () => {
  return useQuery<BlogPage, Error>({
    queryKey: ["blogpage"],
    queryFn: fetchBlogPage,
    staleTime: 1000 * 60 * 5,
  });
};

export default useBlogPage;
