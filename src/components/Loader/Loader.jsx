import { ClockLoader } from 'react-spinners';
import s from './Loader.module.css';
const Loader = () => {
  return (
    <div className={s.backdrop}>
      <ClockLoader color="#a751bf" size={100} />
    </div>
  );
};

export default Loader;
