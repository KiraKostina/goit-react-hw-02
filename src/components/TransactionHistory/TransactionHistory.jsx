import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionTable}>
      <thead className={css.transaction_head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.transaction_row} key={id}>
            <td className={css.transaction_cell}>{type}</td>
            <td className={css.transaction_cell}>{amount}</td>
            <td className={css.transaction_cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
