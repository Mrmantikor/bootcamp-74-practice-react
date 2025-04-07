import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { toast } from 'react-toastify';
import s from './Form.module.css';
function Form({ onSubmit }) {
  const [value, setValue] = useState('');
  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() === '') {
      toast('Enter some text');
      return;
    }
    onSubmit(value);
    setValue('');
  };
  

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input onChange={handleChange} value={value} className={s.input} />
        <button type="submit" className={s.button}>
          <FiSearch size="16px" />
        </button>
      </form>
    </>
  );
}
export default Form;
