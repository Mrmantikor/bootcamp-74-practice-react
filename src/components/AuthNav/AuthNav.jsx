import CustomNavLink from '../CustomNavLink/CustomNavLink';

const AuthNav = () => {
  return (
    <>
      <li>
        <CustomNavLink to={'/login'}>Login</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={'/register'}>Register</CustomNavLink>
      </li>
    </>
  );
};

export default AuthNav;
