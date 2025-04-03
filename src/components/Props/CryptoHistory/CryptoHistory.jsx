import { formatDate } from '../../../helpers/format-date';
import s from './CryptoHistory.module.css';

const CryptoHistory = ({ transactions }) => {
  return (
    <table className={s.table}>
      <thead className={s.thead}>
        <tr>
          <th className={s.th}>№</th>
          <th className={s.th}>PRICE</th>
          <th className={s.th}>AMOUNT</th>
          <th className={s.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, idx) => {
          return (
            <tr className={s.tr} key={id}>
              <td className={s.td}>{idx + 1}</td>
              <td className={s.td}>{price}</td>
              <td className={s.td}>{amount}</td>
              <td className={s.td}>{formatDate(date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
