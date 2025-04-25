import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { useSelector } from 'react-redux';
import { selectBaseCurrency } from '../../redux/currency/selectors';
import SelectBaseCurrency from '../Exchange/SelectBaseCurrency/SelectBaseCurrency';
import { selectIsLoggedIn } from '../../redux/authorization/authSelectors';
import Usermenu from '../Usermenu/Usermenu';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

const Header = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.header}>
      <nav>
        <ul className={s.list}>
          <li>
            <CustomNavLink to={'/'}>Home</CustomNavLink>
          </li>
          {!isLoggedIn ? <AuthNav /> : <Navigation />}
        </ul>
      </nav>
      {isLoggedIn && <Usermenu />}
      {baseCurrency && (
        <div>
          <p>Your base currency:</p> <SelectBaseCurrency />
        </div>
      )}
    </header>
  );
};

export default Header;
