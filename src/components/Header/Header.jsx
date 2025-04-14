import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  const addActive = ({ isActive }) => (isActive ? s.active : s.link);
  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <NavLink className={addActive} to={'/'}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={'/cocktails'}>
              Cocktails
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={'/photos'}>
              Photos
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={'/login'}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={'/register'}>
              Register
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={'/todos'}>
              Todos
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={'/dice'}>
              Dice
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={'/quiz'}>
              Quiz
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={'/state'}>
              State
            </NavLink>
          </li>
          <li>
            <NavLink className={addActive} to={'/props'}>
              Props
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
