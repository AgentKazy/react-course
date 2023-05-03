// Styles
import styles from './Home.module.css';

export default function TransactionList({ transactions }) {
  return (
    <ul className={styles.transactions}>
      {transactions.map((transactions) => (
        <li key={transactions.id}>
          <p className={styles.name}>{transactions.name}</p>
          <p className={styles.amount}>{transactions.amount}€</p>
        </li>
      ))}
    </ul>
  );
}
