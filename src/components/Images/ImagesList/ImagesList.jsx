import Grid from '../../Grid/Grid';
import GridItem from '../../GridItem/GridItem';
import ImageItem from '../ImageItem/ImageItem';

const ImagesList = ({ images }) => {
  return (
    <Grid>
      {images.map(image => {
        return (
          <GridItem key={image.id}>
            <ImageItem image={image} />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default ImagesList;
