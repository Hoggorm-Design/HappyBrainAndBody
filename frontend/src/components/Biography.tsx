import useBiography from '../hooks/useBiography.ts';

export default function Biography() {
  const { postData, loading, error } = useBiography(); // Use the custom hook

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='container'>
      {postData.map(post => (
        <div className='gray-background-container' key={post.slug.current}>
          <div className='image-text-container'>
            <div className='image-container'>
              <img src={post.mainImage.asset.url} alt={post.mainImage.alt} />
            </div>
            <div className='text-container'>
              <h3>{post.title}</h3>
              <p style={{ marginTop: '-20px' }}>{post.mainImage.alt}</p>
              <p>{post.profession}</p>
            </div>
          </div>
          <div className='post-body'>
            <p>{post.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
