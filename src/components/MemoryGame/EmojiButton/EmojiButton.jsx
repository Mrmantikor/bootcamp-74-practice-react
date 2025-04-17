import { decodeEntity } from 'html-entities';
import s from './EmojiButton.module.css';
const EmojiButton = ({ emoji }) => {
  return <button className={s.btn}>{decodeEntity(emoji.htmlCode[0])}</button>;
};

export default EmojiButton;
