import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FiSearch } from 'react-icons/fi';
import * as Yup from 'yup';
import s from './TodoForm.module.css';
const validationSchema = Yup.object({
  text: Yup.string()
    .min(2, 'Too short')
    .max(10, 'Too long')
    .required('This field is required'),
});
export const TodoForm = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    onSubmit(values.text);
    actions.resetForm();
  };
  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{ text: '' }}
    >
      <Form className={s.form}>
        <Field
          className={s.input}
          name="text"
          type="text"
          placeholder="Enter todo"
        />
        <ErrorMessage className={s.error} name="text" component="p" />
        <button className={s.button} type="submit">
          <FiSearch size="16px" />
        </button>
      </Form>
    </Formik>
  );
};
