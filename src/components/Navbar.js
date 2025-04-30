import logo from '../assets/images/APM-Logo-BG.png';
import './Navbar.css';
import simulateAnchorClick from './functions.js';

function Navbar() {
  const handleClickProjectLink = () => {
    simulateAnchorClick('https://github.com/Abled-Taha/apm-app-web-react');
  }

  return (
    <section className="section section-navbar">
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" onClick={handleClickProjectLink} />
          <h1>navigationbar</h1>
        </div>
        <ul className="nav-links">
            <li><a href="/">Add New</a></li>
            <li>
              <button className="setting-btn">
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
            </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
