// useBlogPosts.ts
import { useQuery } from "@tanstack/react-query";
import sanityClient from "../client";

interface BlogPost {
  header: string;
  text: string;
  image: { asset: { url: string } };
  link: string;
  alt: string;
  pdf?: { asset: { url: string } };
  publishedAt: string;
}

const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const data = await sanityClient.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      header,
      text,
      image { asset->{_id, url} },
      link,
      alt,
      pdf { asset->{url} },
      publishedAt
    }`
  );
  return data;
};

const useBlogPosts = () => {
  return useQuery<BlogPost[], Error>({
    queryKey: ["blogposts"],
    queryFn: fetchBlogPosts,
    staleTime: 1000 * 60 * 10,
    refetchInterval: 1000 * 60 * 15, 
  });
};

export default useBlogPosts;
