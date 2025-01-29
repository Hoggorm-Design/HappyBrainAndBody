// Blog.tsx
import { useEffect, useState } from "react";
import Card from "./Card";
import useBlogPosts from "../hooks/useBlogPosts";
import useBlogPage from "../hooks/useBlogPage";
import { FiArrowDownCircle } from "react-icons/fi";
import { useLoading } from "../context/LoadingContext";

const Blog = () => {
  const { setIsLoading, isLoading } = useLoading(); // global spinner
  const { blogPosts, error: postsError } = useBlogPosts();
  const { blogPageData, error: pageError } = useBlogPage();

  const [postsToShow, setPostsToShow] = useState(4);

  // 1) Start loading ONCE when Blog mounts
  useEffect(() => {
    setIsLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // empty dependency => runs only once on mount

  // 2) Stop loading if data is ready or if there's an error
  useEffect(() => {
    if (postsError || pageError) {
      setIsLoading(false);
    } else if (blogPosts !== null && blogPageData !== null) {
      setIsLoading(false);
    }
  }, [blogPosts, blogPageData, postsError, pageError, setIsLoading]);

  // 3) If there's an error, show it
  if (postsError || pageError) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        Error: {postsError || pageError}
      </div>
    );
  }

  // 4) If still loading, optionally show a local fallback
  if (isLoading) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p>Loading Blog...</p>
      </div>
    );
  }

  // 5) Normal rendering once loading is false
  const currentPosts = (blogPosts || []).slice(0, postsToShow);
  const handleShowMore = () => setPostsToShow((prev) => prev + 4);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen space-y-12 my-36 px-6">
      {blogPageData && (
        <div className="text-center">
          <h1 className="header font-bold">{blogPageData.header}</h1>
          <p>{blogPageData.text}</p>
        </div>
      )}

      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-y-10 justify-items-center">
        {currentPosts.map((post) => (
          <Card
            key={post.header}
            image={post.image?.asset?.url || ""}
            header={post.header}
            text={post.text}
            link={post.link}
            imageDescription={post.alt}
            pdfFile={post.pdf?.asset?.url || ""}
          />
        ))}
      </div>

      {currentPosts.length < (blogPosts || []).length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleShowMore}
            className="flex items-center px-6 py-3 bg-[#5286A4] text-white rounded-full hover:bg-[#396E8A] hover:scale-110 transition-transform duration-200"
          >
            <span>Vis mer</span> <FiArrowDownCircle className="ml-2" />
          </button>
        </div>
      )}
    </section>
  );
};

export default Blog;
