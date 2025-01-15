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
        <section id="Var-lege" className="flex flex-col 2xl:flex-row gap-5 items-center justify-around bg-white h-full w-full p-[30px] 2xl:px-[100px] py-36">
            <div className="w-full 2xl:w-auto flex justify-start items-center">
                <img
                    src={post.mainImage?.asset?.url}
                    alt={post.alt}
                    className="max-h-[400px] max-w-[400px] w-auto h-auto object-contain"
                />
            </div>
            <div className="flex flex-col justify-center gap-5 h-3/5 xl:h-full">
                <div>
                    <div>
                        <h2 className="header font-semibold">{post.title}</h2>
                        <h3 className="sub-header">{post.profession}</h3>
                    </div>
                    <div className="mt-5 text">
                        <p className="block mt-4 text-left overflow-hidden text-ellipsis break-words">{post.body}</p>

                    </div>
                </div>
            </div>
        </section>
    );
}
