import PropTypes from 'prop-types';
import style from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transaction__history}>
      <thead className={style.transaction__head}>
        <tr>
          <th className={style.transaction__title}>Type</th>
          <th className={style.transaction__title}>Amount</th>
          <th className={style.transaction__title}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={style.transaction__row} key={id}>
            <td className={style.transaction__cell}>{type}</td>
            <td className={style.transaction__cell}>{amount}</td>
            <td className={style.transaction__cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
