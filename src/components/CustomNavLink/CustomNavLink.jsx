import { NavLink } from 'react-router-dom';
import s from './CustomNavLink.module.css';
const addActive = ({ isActive }) => (isActive ? s.active : s.link);

const CustomNavLink = ({ children, to }) => {
  return (
    <NavLink className={addActive} to={to}>
      {children}
    </NavLink>
  );
};

export default CustomNavLink;
