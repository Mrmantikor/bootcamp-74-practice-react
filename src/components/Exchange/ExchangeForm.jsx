import { useDispatch } from 'react-redux';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { RiExchangeDollarFill } from 'react-icons/ri';
import * as Yup from 'yup';
import s from './ExchangeForm.module.css';
import { fetchExchangeCurrency } from '../../redux/currency/operation';

const ExchangeForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, action) => {
    const [amount, from, , to] = values.currency.split(' ');
    dispatch(fetchExchangeCurrency({ to, from, amount }));
    action.resetForm();
  };

  const CurrencyFormSchema = Yup.object().shape({
    currency: Yup.string()
      .matches(
        /^\d+(\.\d{1,2})?\s[a-zA-Z]{3}\sin\s[a-zA-Z]{3}$/,
        'Request format: 15 USD in UAH'
      )
      .required('Currency input is required'),
  });

  return (
    <Formik
      initialValues={{ currency: '' }}
      onSubmit={handleSubmit}
      validationSchema={CurrencyFormSchema}
    >
      <Form className={s.form}>
        <Field
          name="currency"
          type="text"
          placeholder="15 USD in UAH"
          className={s.input}
        />
        <button className={s.button}>
          <RiExchangeDollarFill className={s.icon} />
        </button>
        <ErrorMessage name="currency" component="div" className={s.error} />
      </Form>
    </Formik>
  );
};

export default ExchangeForm;
