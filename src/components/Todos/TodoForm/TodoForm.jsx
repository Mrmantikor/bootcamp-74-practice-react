import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FiSearch } from 'react-icons/fi';
import * as Yup from 'yup';
import s from './TodoForm.module.css';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../../redux/action';
const validationSchema = Yup.object({
  text: Yup.string()
    .min(2, 'Too short')
    .max(10, 'Too long')
    .required('This field is required'),
});
export const TodoForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(
      addTodo({
        text: values.text,
        id: nanoid(),
      })
    );
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
