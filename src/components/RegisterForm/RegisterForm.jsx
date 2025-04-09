import { Field, Form, Formik } from 'formik';

import Container from '../Container/Container';
import s from './RegisterForm.module.css';
import { usePasswordToggle } from '../../hooks/usePasswordToggle';
import ToggleIcon from '../ToggleIcon/ToggleIcon';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = usePasswordToggle(['pass1', 'pass2']);

  return (
    <Container className={s.flex}>
      <div className={s.box}>
        <h3 className={s.header}>Registration</h3>
        <Formik>
          <Form className={s.formWrapper}>
            <div className={s.fieldBox}>
              <Field className={s.input} placeholder="Enter your name" />
            </div>
            <div className={s.fieldBox}>
              <Field className={s.input} placeholder="Enter your email" />
            </div>
            <div className={s.fieldBox}>
              <Field
                className={s.input}
                placeholder="Enter your password"
                type={showPassword.pass1 ? 'text' : 'password'}
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
                type={showPassword.pass2 ? 'text' : 'password'}
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
