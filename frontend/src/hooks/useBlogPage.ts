import { useState, useEffect } from "react";
import sanityClient from "../client";
import { useLoading } from "../context/LoadingContext";

export interface BlogPage {
  header: string;
  text: string;
}

const useBlogPage = () => {
  const [blogPageData, setBlogPageData] = useState<BlogPage | null>(null);
  const { startLoading, stopLoading } = useLoading();

  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPage = async () => {
      startLoading();
      try {
        const data: BlogPage | null = await sanityClient.fetch(
          `*[_type == "blogPage"][0]{
                        header,
                        text
                    }`,
        );
        setBlogPageData(data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blog page data");
      } finally {
        stopLoading();
      }
    };

    fetchBlogPage();
  }, [startLoading, stopLoading]);

  return { blogPageData, error };
};

export default useBlogPage;
