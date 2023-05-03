import { NavLink } from 'react-router-dom';

// Styles & Images
import './Sidebar.css';
import DashboardIcon from '../assets/grid-four.svg';
import AddIcon from '../assets/plus-square.svg';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="user">
          {/* Avatar and Username here later */}
          <p>Hey, user!</p>
        </div>
        <nav className="links">
          <ul>
            <li>
              <NavLink exact to="/">
                <img src={DashboardIcon} alt="Dashboard icon" />
                <span>Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink to="/create">
                <img src={AddIcon} alt="Add project icon" />
                <span>New Project</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
