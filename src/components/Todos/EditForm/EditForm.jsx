import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import s from './EditForm.module.css';
import { useDispatch } from 'react-redux';
import { updateTodo, setCurrentTodo } from '../../../redux/todoSlice.js';


const validationSchema = Yup.object({
  text: Yup.string()
    .min(2, 'Too short')
    .max(10, 'Too long')
    .required('This field is required'),
});

const EditForm = ({ initialValue }) => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(updateTodo(values.text));
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{ text: initialValue }}
    >
      <Form className={s.form}>
        <Field
          className={s.input}
          name="text"
          type="text"
          placeholder="Enter todo"
        />
        <ErrorMessage className={s.error} name="text" component="p" />
        <button className={s.submitButton} type="submit">
          <RiSaveLine color="green" size="16px" />
        </button>
        <button
          className={s.editButton}
          type="button"
          onClick={() => dispatch(setCurrentTodo(null))}
        >
          <MdOutlineCancel color="red" size="16px" />
        </button>
      </Form>
    </Formik>
  );
};

export default EditForm;
