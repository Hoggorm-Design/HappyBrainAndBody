
import useTextOverImageTop from '../hooks/useTextOverImageTop.ts';



export default function TextOverImageTop() {
  const { postData, loading, error } = useTextOverImageTop(); // Use the custom hook

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {postData.map(post => (
        <div key={post.slug.current} className={"#"}>
          <div className=''>
          </div>
          <div className=''>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </>
  );
}
