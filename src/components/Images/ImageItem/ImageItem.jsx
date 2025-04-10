import s from './ImageItem.module.css';

const ImageItem = ({ image }) => {
  return (
    <div
      className={s.thumb}
      style={{ backgroundColor: image.avg_color, borderColor: image.avg_color }}
    >
      <img src={image.src.small} />
    </div>
  );
};

export default ImageItem;
