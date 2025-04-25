import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/authorization/authSelectors';

import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
