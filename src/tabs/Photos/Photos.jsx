import { useEffect, useState } from 'react';
import Container from '../../components/Container/Container';
import Form from '../../components/Form/Form';
import Section from '../../components/Section/Section';
import { getPhotos } from '../../service/pexelsAPI';
import ImagesList from '../../components/Images/ImagesList/ImagesList';
import Loader from '../../components/Loader/Loader';
import Heading from '../../components/Heading/Heading';
import { LoadMore } from '../../components/Images/LoadMore/LoadMore';
import { ModalImage } from '../../components/Images/ModalImage/ModalImage';

const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    if (!query) return;
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page
        );
        if (!total_results) {
          setIsEmpty(true);
          return;
        }
        setImages(prevState => [...prevState, ...photos]);
        setShowLoadMore(page < Math.ceil(total_results / per_page));
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
    setShowLoadMore(false);
    setIsEmpty(false);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const openModal = image => {
    setModalImage(image);
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit} />
        {images.length > 0 && (
          <ImagesList images={images} openModal={openModal} />
        )}
        {error && (
          <Heading
            text={`Something went wrong! ${error}`}
            mTop
            variant="error"
          />
        )}
        {isLoading && <Loader />}
        {showLoadMore && <LoadMore handleClick={handleClick} />}
        {isEmpty && (
          <Heading
            text={`We couldn't find a photo with the word ${query}`}
            mTop
            variant="info"
          />
        )}

        <ModalImage
          image={modalImage}
          modalIsOpen={Boolean(modalImage)}
          closeModal={() => openModal(null)}
        />
      </Container>
    </Section>
  );
};

export default Photos;
