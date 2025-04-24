import { useSelector } from 'react-redux';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import { selectIsLoading } from '../../redux/authorization/authSelectors';
import Loader from '../../components/Loader/Loader';

const Register = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div>
      <RegisterForm />
      {isLoading && <Loader />}
    </div>
  );
};

export default Register;
