import useBiography from "../hooks/useBiography.ts";


export default function Biography() {
    const { postData, loading, error } = useBiography();

    if (loading) {
        return <p>Loading posts...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            {postData.map((post) => (
            <section className="flex flex-col 2xl:flex-row gap-10 items-center justify-around bg-[#F3F7F9] h-full w-full p-[30px] 2xl:px-[100px] pt-20">

                <div className="w-full 2xl:w-auto flex justify-start items-center">
                    <img src={post.mainImage?.asset?.url} alt={post.alt} className="w-[30vw] max-w-[300px]" />
                </div>
                <div className="flex flex-col justify-center gap-5 h-3/5 xl:h-full">
                        <div>
                            <div>
                                <h2 className="header font-bold">{post.title}</h2>
                                <h3 className="sub-header">{post.profession}</h3>
                            </div>

                            <div className="mt-5 text">
                                <p>{post.alt}</p>
                                <p>{post.body}</p>
                            </div>
                        </div>

                </div>
            </section>
            ))}
        </>
    );
}
