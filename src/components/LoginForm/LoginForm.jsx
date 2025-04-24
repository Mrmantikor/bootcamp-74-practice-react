import Container from '../Container/Container.jsx';
import s from '../RegisterForm/RegisterForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { validationLoginSchema } from '../../validation/auth.js';
import ToggleIcon from '../ToggleIcon/ToggleIcon.jsx';
import { toast } from 'react-toastify';
import { usePasswordToggle } from '../../hooks/usePasswordToggle.js';
import { useDispatch } from 'react-redux';
import { loginThuk } from '../../redux/authorization/authOperations.js';

const LoginForm = () => {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = usePasswordToggle(['pass1']);

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(loginThuk(values)).unwrap();
      toast.success('Logged in successfully');
    } catch (error) {
      console.log(error);
      toast.error('Check email and password and try again');
    }
    actions.resetForm();
  };

  return (
    <Container className={s.flex}>
      <div className={s.box}>
        <h3 className={s.header}>Login</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationLoginSchema}
          onSubmit={handleSubmit}
        >
          <Form className={s.formWrapper}>
            <div className={s.fieldBox}>
              <Field
                type="email"
                className={s.input}
                placeholder="Enter your email"
                name="email"
              />
              <ErrorMessage name="email" component="div" className={s.error} />
            </div>
            <div className={s.fieldBox}>
              <Field
                className={s.input}
                placeholder="Enter your password"
                name="password"
                type={showPassword.pass1 ? 'text' : 'password'}
              />
              <ErrorMessage
                name="password"
                component="div"
                className={s.error}
              />
              <ToggleIcon
                onClick={() => setShowPassword('pass1')}
                showPassword={showPassword.pass1}
              />
            </div>

            <button className={s.button} type="submit">
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default LoginForm;
