import Select from 'react-select';
import options from './symbols.json';
import { useDispatch, useSelector } from 'react-redux';
import { selectBaseCurrency } from '../../../redux/currency/selectors';
import { setBaseCurrency } from '../../../redux/currency/currencySlice';

const SelectBaseCurrency = () => {
  const baseCurrency = useSelector(selectBaseCurrency);
  const dispatch = useDispatch();
  const handleChange = ({ value }) => {
    dispatch(setBaseCurrency(value));
  };
  return (
    <div>
      <Select
        defaultValue={{ value: baseCurrency, label: baseCurrency }}
        onChange={handleChange}
        options={options}
        isSearchable
      />
    </div>
  );
};

export default SelectBaseCurrency;
