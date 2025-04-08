import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FiSearch } from 'react-icons/fi';
import * as Yup from 'yup';
import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import s from './EditForm.module.css'

const validationSchema = Yup.object({
  text: Yup.string()
    .min(2, 'Too short')
    .max(10, 'Too long')
    .required('This field is required'),
});

const EditForm = ({initialValue, updateTodo, cancelUpdate}) => {

  const handleSubmit = (values, actions) => {
    updateTodo(values.text);
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
              <button className={s.editButton} type="button" onClick={cancelUpdate}>
                <MdOutlineCancel color="red" size="16px" />
              </button>
            </Form>
          </Formik>

    );
};

export default EditForm;