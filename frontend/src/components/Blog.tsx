import Card from './Card.tsx';
import useBlogPosts from '../hooks/useBlogPosts';
import useBlogPage from "../hooks/useBlogPage.ts";

const Blog = () => {
    const { blogPosts, loading, error } = useBlogPosts();
    const { blogPageData } = useBlogPage();

    if (loading) {
        return <div className="w-screen h-screen flex justify-center items-center">Laster...</div>;
    }

    if (error) {
        return <div className="w-screen h-screen flex justify-center items-center">Error: {error}</div>;
    }

    if (!blogPageData) {
        return <div className="w-screen h-screen flex justify-center items-center">Blogg-data er ikke tilgjengelig.</div>;
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen space-y-12 my-36 px-6">
            {/* Blog Page Header Section */}
            <div className="text-center">
                <h1 className="header font-bold">{blogPageData.header}</h1>
                <p>{blogPageData.text}</p>
            </div>

            {/* Blog Posts Section */}
            <div className="w-full flex flex-wrap justify-center items-center flex-col gap-20">
                {blogPosts?.map((post) => (
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
        </section>
    );
};

export default Blog;
