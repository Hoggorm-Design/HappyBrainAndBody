import useBiography from "../hooks/useBiography";
import { useLoading } from "../context/LoadingContext";

export default function Biography() {
  const { postData, error } = useBiography();
  const { isLoading } = useLoading();

  if (error) {
    return <p>{error}</p>;
  }

  const post = postData[0];

  return (
    <>
      {!isLoading && post && (
        <section
          id="Var-lege"
          className="flex flex-col xl:flex-row items-start justify-start bg-white h-full w-full p-[30px] lg:px-[100px] py-10 gap-5 mb-[100px]"
        >
          {/* Image Section */}
          <div className="image-content shrink-0 max-w-[350px] mx-auto xl:mx-0">
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
      )}
    </>
  );
}
