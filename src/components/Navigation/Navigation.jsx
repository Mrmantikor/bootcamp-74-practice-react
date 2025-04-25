import CustomNavLink from '../CustomNavLink/CustomNavLink';

const Navigation = () => {
  return (
    <>
      <li>
        <CustomNavLink to={'/cocktails'}>Cocktails</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={'/searchcocktails'}>Search</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={'/photos'}>Photos</CustomNavLink>
      </li>

      <li>
        <CustomNavLink to={'/todos'}>Todos</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={'/dice'}>Dice</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={'/quiz'}>Quiz</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={'/state'}>State</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={'/props'}>Props</CustomNavLink>
      </li>
      <li>
        <CustomNavLink to={'/exchange'}>Exchange</CustomNavLink>
      </li>
    </>
  );
};

export default Navigation;
