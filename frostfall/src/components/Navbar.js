import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';

// Styles & Images
import './Navbar.css';
import Snowflake from '../assets/snowflake-light.svg';

export default function Navbar() {
  const { logout, isPending } = useLogout();

  return (
    <div className="navbar">
      <ul>
        <li className="logo">
          <img src={Snowflake} alt="Frostfall logo of a snowflake" />
          <span className="brand">Frostfall</span>
        </li>

        <li>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </li>

        <li>
          {!isPending && (
            <button className="btn" onClick={logout}>
              Logout
            </button>
          )}
          {isPending && (
            <button className="btn" disabled>
              Logging out...
            </button>
          )}
        </li>
      </ul>
    </div>
  );
}
