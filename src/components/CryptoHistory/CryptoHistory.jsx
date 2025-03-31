const CryptoHistory = ({ transactions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>PRICE</th>
          <th>AMOUNT</th>
          <th>DATE</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, idx) => {
          return (
            <tr key={id}>
              <td>{idx + 1}</td>
              <td>{price}</td>
              <td>{amount}</td>
              <td>{date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CryptoHistory;
