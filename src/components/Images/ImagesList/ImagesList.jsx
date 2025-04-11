import { useEffect, useRef } from 'react';
import Grid from '../../Grid/Grid';
import GridItem from '../../GridItem/GridItem';
import ImageItem from '../ImageItem/ImageItem';

const ImagesList = ({ images, openModal }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const lastItem = galleryRef.current.lastElementChild;
      const height = lastItem.getBoundingClientRect().height;
      window.scrollBy({
        top: height * 2,
        behavior: 'smooth',
      });
    }
  }, [images]);

  return (
    <Grid ref={galleryRef}>
      {images.map(image => {
        return (
          <GridItem key={image.id}>
            <ImageItem image={image} openModal={openModal} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ImagesList;
