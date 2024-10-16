import useBiography from '../hooks/useBiography.ts';

const Introduction = () => {
  const { postData, loading, error } = useBiography();
};

export default Introduction;
