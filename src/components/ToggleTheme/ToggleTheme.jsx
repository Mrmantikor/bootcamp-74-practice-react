import { useContext } from 'react';
import s from './ToggleTheme.module.css';
import Switch from 'react-switch';
import { GiNightSky } from 'react-icons/gi';
import { FaRegLightbulb } from 'react-icons/fa6';
import { ThemeContext } from '../../ThemeContext/ThemeContext';

const ToggleTheme = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <div className={s.container}>
      <Switch
        uncheckedIcon={<GiNightSky size={26} color={'fuchsia'} />}
        checkedIcon={<FaRegLightbulb size={26} color={'#f1cc17'} />}
        uncheckedHandleIcon={<FaRegLightbulb size={26} color={'#f1cc17'} />}
        checkedHandleIcon={<GiNightSky size={26} color={'fuchsia'} />}
        offColor={'#9a2424'}
        onColor={'#63c37d'}
        onChange={handleChange}
        checked={theme === 'dark'}
      />
    </div>
  );
};

export default ToggleTheme;
