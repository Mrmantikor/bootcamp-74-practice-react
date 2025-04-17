import EmojiButton from '../EmojiButton/EmojiButton';
import s from './MemoryCard.module.css';
const MemoryCard = ({ data }) => {
  return (
    <ul className={s.cardList}>
      {data.map((emoji, index) => {
        return (
          <li key={index}>
            <EmojiButton emoji={emoji} />
          </li>
        );
      })}
    </ul>
  );
};

export default MemoryCard;
