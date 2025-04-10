import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Form from '../../components/Form/Form';
import Section from '../../components/Section/Section';
import { getPhotos } from '../../service/pexelsAPI';
import ImagesList from '../../components/Images/ImagesList/imagesList';
import Loader from '../../components/Loader/Loader';
import Heading from '../../components/Heading/Heading';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { photos } = await getPhotos(query, page);
        setImages([...images, ...photos]);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setError('');
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit} />
        {images.length > 0 && <ImagesList images={images} />}
        {error && (
          <Heading
            text={`Something went wrong! ${error}`}
            mTop
            variant="error"
          />
        )}
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default Photos;
