import RegularButton from '../RegularButton/RegularButton';
import Select from '../Select/Select';
import Text from '../Text/Text';
import s from './MemoryForm.module.css';

const MemoryForm = ({ handleChange, onSubmit }) => {
  return (
    <div className={s.formContainer}>
      <Text
        text="Customize the game by selecting an emoji category and a number of memory
        cards."
        size="regular"
      />
      <form onSubmit={onSubmit} className={s.form}>
        <Select handleChange={handleChange} />
        <RegularButton type={'submit'} style="btnText">
          Start Game
        </RegularButton>
      </form>
    </div>
  );
};

export default MemoryForm;
