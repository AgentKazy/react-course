import { Link } from 'react-router-dom';

// Styles
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>Simple Finance</li>

        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
