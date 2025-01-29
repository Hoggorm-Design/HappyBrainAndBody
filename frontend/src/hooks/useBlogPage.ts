// useBlogPage.ts
import { useState, useEffect } from "react";
import sanityClient from "../client";

export interface BlogPage {
  header: string;
  text: string;
}

const useBlogPage = () => {
  const [blogPageData, setBlogPageData] = useState<BlogPage | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchBlogPage = async () => {
      try {
        const data: BlogPage | null = await sanityClient.fetch(
          `*[_type == "blogPage"][0]{ header, text }`,
        );
        if (mounted) setBlogPageData(data || null);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch blog page data");
      }
    };

    fetchBlogPage();

    return () => {
      mounted = false;
    };
  }, []);

  return { blogPageData, error };
};

export default useBlogPage;
