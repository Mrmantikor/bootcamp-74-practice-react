import { useSelector } from 'react-redux';
import Loader from '../../components/Loader/Loader.jsx';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import { selectIsLoading } from '../../redux/authorization/authSelectors.js';

const Login = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <div>
      <LoginForm />
      {isLoading && <Loader />}
    </div>
  );
};

export default Login;
