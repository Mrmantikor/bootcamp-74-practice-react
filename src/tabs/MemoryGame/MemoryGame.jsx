import { useState } from 'react';
import MemoryForm from '../../components/MemoryGame/MemoryForm/MemoryForm';
import Text from '../../components/MemoryGame/Text/Text';
import s from './MemoryGame.module.css';
import { fetchEmoji } from '../../service/emojihubAPI';
import MemoryCard from '../../components/MemoryGame/MemoryCard/MemoryCard';
import { getRandomIndexes } from '../../helpers/getRandomIndexes';
import { getEmojisArray } from '../../helpers/getEmojisArray';

const MemoryGame = () => {
  const [formData, setFormData] = useState({
    category: 'animals-and-nature',
    number: 10,
  });

  const [isGameOn, setGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const data = await fetchEmoji(formData.category);
      const dataSlice = getRandomIndexes(data, formData.number).map(
        number => data[number]
      );
      const emojisArray = getEmojisArray(dataSlice);
      setEmojisData(emojisArray);
      setGameOn(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={s.container}>
      <Text text="Memory" className="title" type="h1" />
      {!isGameOn && (
        <MemoryForm onSubmit={handleSubmit} handleChange={handleChange} />
      )}
      {isGameOn && <MemoryCard data={emojisData} />}
    </div>
  );
};

export default MemoryGame;
