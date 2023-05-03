import { Link } from 'react-router-dom';

// Styles & Images
import './Navbar.css';
import Snowflake from '../assets/snowflake-light.svg';

export default function Navbar() {
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
          <button className="btn">Logout</button>
        </li>
      </ul>
    </div>
  );
}
