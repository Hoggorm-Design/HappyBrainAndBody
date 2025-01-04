import { useState } from 'react';
import Card from './Card.tsx';
import useBlogPosts from '../hooks/useBlogPosts';
import useBlogPage from "../hooks/useBlogPage.ts";
import { FiArrowDownCircle } from "react-icons/fi";

const Blog = () => {
    const { blogPosts, loading, error } = useBlogPosts();
    const { blogPageData } = useBlogPage();

    const posts = blogPosts || [];

    const [postsToShow, setPostsToShow] = useState(4); // Initially show 4 posts

    if (loading) {
        return <div className="w-screen h-screen flex justify-center items-center">Loading...</div>;
    }

    if (error) {
        return <div className="w-screen h-screen flex justify-center items-center">Error: {error}</div>;
    }

    if (!blogPageData) {
        return <div className="w-screen h-screen flex justify-center items-center">Blog data not available.</div>;
    }

    const currentPosts = posts.slice(0, postsToShow);

    const handleShowMore = () => {
        setPostsToShow(postsToShow + 4); // Load 4 more posts on each click
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen space-y-12 my-36 px-6">
            <div className="text-center">
                <h1 className="header font-bold">{blogPageData.header}</h1>
                <p>{blogPageData.text}</p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12">
                {currentPosts?.map((post) => (
                    <Card
                        key={post.header}
                        image={post.image?.asset?.url || ''}
                        header={post.header}
                        text={post.text}
                        link={post.link}
                        imageDescription={post.alt}
                        pdfFile={post.pdf?.asset?.url || ''}
                    />
                ))}
            </div>

            {currentPosts.length < posts.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleShowMore}
                        className="flex items-center px-6 py-3 bg-[#5286A4] text-white rounded-full hover:bg-[#396E8A] hover:scale-110 transition-transform duration-200"
                    >
                        <span>Show More</span> <FiArrowDownCircle className="ml-2" />
                    </button>
                </div>
            )}
        </section>
    );
};

export default Blog;
