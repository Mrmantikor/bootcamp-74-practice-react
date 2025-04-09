import { FaEye, FaEyeSlash } from 'react-icons/fa';
import s from './ToggleIcon.module.css';
const ToggleIcon = ({ showPassword, onClick }) => {
  return (
    <button className={s.iconBtn} onClick={onClick} type="button">
      {showPassword ? <FaEye /> : <FaEyeSlash />}
    </button>
  );
};

export default ToggleIcon;
