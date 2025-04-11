import s from './ImageItem.module.css';

const ImageItem = ({ image, openModal }) => {
  return (
    <div
      className={s.thumb}
      style={{ backgroundColor: image.avg_color, borderColor: image.avg_color }}
    >
      <img
        src={image.src.small}
        onClick={() => openModal({ src: image.src.large, alt: image.alt })}
      />
    </div>
  );
};

export default ImageItem;
