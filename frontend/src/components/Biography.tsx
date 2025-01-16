import useBiography from "../hooks/useBiography";

export default function Biography() {
    const { postData, loading, error } = useBiography();

    if (loading) {
        return <p>Laster inn...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const post = postData[0];

    if (!post) {
        return <p>Ingen biografi tilgjengelig</p>;
    }
    return (
        <section
            id="Var-lege"
            className="flex flex-col 2xl:flex-row items-start justify-start bg-white h-full w-full p-[30px] 2xl:px-[100px] py-10 gap-5"
        >
            {/* Image Section */}
            <div className="image-content flex-shrink-0 max-w-[350px]">
                <img
                    src={post.mainImage?.asset?.url}
                    alt={post.alt}
                    className="max-h-[350px] max-w-[350px] w-auto h-auto object-contain"
                />
            </div>

            {/* Text Section */}
            <div className="text-content flex-1 flex flex-col justify-start h-auto">
                <div>
                    <h2 className="header font-semibold">{post.title}</h2>
                    <h3 className="sub-header">{post.profession}</h3>
                </div>

                <div className="mt-5 text">
                    <p className="block mt-4 text-left overflow-hidden text-ellipsis break-words">
                        {post.body}
                    </p>
                </div>
            </div>
        </section>


    );
}
