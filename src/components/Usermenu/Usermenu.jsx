import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/authorization/authSelectors';
import { logoutThunk } from '../../redux/authorization/authOperations';
import { toast } from 'react-toastify';

const Usermenu = () => {
  const user = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(logoutThunk()).unwrap();
      toast.success('Goodbye hope to see you again!');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong please try again');
    }
  };

  return (
    <div>
      <h1>Welcome,{user.name} </h1>
      <button type="button " onClick={handleLogout}>
        Logout{' '}
      </button>
    </div>
  );
};

export default Usermenu;
