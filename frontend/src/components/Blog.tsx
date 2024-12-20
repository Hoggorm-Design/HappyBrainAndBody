import Card from './Card.tsx';
import useBlogPosts from '../hooks/useBlogPosts';

const Blog = () => {
    const { blogPosts, loading, error } = useBlogPosts();
    console.log(blogPosts);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section className="flex flex-col items-center justify-center min-h-screen space-y-8">
            <div className="text-center">
                <h1 className="text-2xl font-bold">Meretes Blog</h1>

            </div>

            <div className="w-full flex flex-wrap justify-center items-center flex-col gap-8">
                {blogPosts?.map((post) => (
                    <Card
                        key={post.header}
                        image={post.image?.asset?.url}
                        header={post.header}
                        text={post.text}
                        link={post.link}

                    />

                ))}
            </div>
        </section>
    );
};

export default Blog;
