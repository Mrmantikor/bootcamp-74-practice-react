import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import Container from '../Container/Container';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import { usePasswordToggle } from '../../hooks/usePasswordToggle';
import { validationRegisterSchema } from '../../validation/auth.js';
import s from './RegisterForm.module.css';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/authorization/authOperations.js';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = usePasswordToggle(['pass1', 'pass2']);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = async ({ name, email, password }, actions) => {
    try {
      await dispatch(registerThunk({ name, email, password })).unwrap();
      toast.success('Register success');
    } catch (error) {
      console.log(error);
      toast.error('Check email and password and try again');
    }
    actions.resetForm();
  };
  return (
    <Container className={s.flex}>
      <div className={s.box}>
        <h3 className={s.header}>Registration</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={validationRegisterSchema}
          onSubmit={handleSubmit}
        >
          <Form className={s.formWrapper}>
            <div className={s.fieldBox}>
              <Field
                type="text"
                className={s.input}
                placeholder="Enter your name"
                name="name"
              />
              <ErrorMessage name="name" component="div" className={s.error} />
            </div>
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
                autoComplete="current_password"
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
            <div className={s.fieldBox}>
              <Field
                className={s.input}
                placeholder="Confirm your password"
                name="confirmPassword"
                type={showPassword.pass2 ? 'text' : 'password'}
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className={s.error}
              />
              <ToggleIcon
                onClick={() => setShowPassword('pass2')}
                showPassword={showPassword.pass2}
              />
            </div>
            <button className={s.button} type="submit">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    </Container>
  );
};

export default RegisterForm;
