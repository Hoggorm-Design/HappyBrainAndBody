import { useState } from 'react';
import Card from './Card.tsx';
import useBlogPosts from '../hooks/useBlogPosts';
import useBlogPage from "../hooks/useBlogPage.ts";

const Blog = () => {
    const { blogPosts, loading, error } = useBlogPosts();
    const { blogPageData } = useBlogPage();

    // Handle case when blogPosts is null or undefined
    const posts = blogPosts || []; // Default to an empty array if null/undefined

    // State for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    if (loading) {
        return <div className="w-screen h-screen flex justify-center items-center">Laster...</div>;
    }

    if (error) {
        return <div className="w-screen h-screen flex justify-center items-center">Error: {error}</div>;
    }

    if (!blogPageData) {
        return <div className="w-screen h-screen flex justify-center items-center">Blogg-data er ikke tilgjengelig.</div>;
    }

    // Calculate the indices for the current page's posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Calculate the number of pages
    const totalPages = Math.ceil(posts.length / postsPerPage);

    // Change page
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    return (
        <section className="flex flex-col items-center justify-center min-h-screen space-y-12 my-36 px-6">
            {/* Blog Page Header Section */}
            <div className="text-center">
                <h1 className="header font-bold">{blogPageData.header}</h1>
                <p>{blogPageData.text}</p>
            </div>

            {/* Blog Posts Section */}
            <div className="w-full flex flex-wrap justify-center items-center flex-col gap-20">
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

            {/* Pagination Section */}
            <div className="flex justify-center gap-4 mt-8">
                <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-[#5286A4] text-white rounded-full disabled:opacity-50"
                >
                    &lt; Previous
                </button>
                <span className="text-lg font-semibold">{`${currentPage} / ${totalPages}`}</span>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-[#5286A4] text-white rounded-full disabled:opacity-50"
                >
                    Next &gt;
                </button>
            </div>
        </section>
    );
};

export default Blog;
