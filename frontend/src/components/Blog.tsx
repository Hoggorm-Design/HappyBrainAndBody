import { useState } from "react";
import { FiArrowDownCircle } from "react-icons/fi";
import useBlogPage from "../hooks/useBlogPage";
import useBlogPosts from "../hooks/useBlogPosts";
import Card from "./Card";

const Blog = () => {
  const { data: blogPageData, error: pageError } = useBlogPage();
  const { data: blogPosts, error: postsError } = useBlogPosts();

  const [postsToShow, setPostsToShow] = useState(4);

  if (postsError || pageError) {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <p className="text-red-500">
          Error:{" "}
          {postsError?.message || pageError?.message || "An error occurred"}
        </p>
      </div>
    );
  }

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
