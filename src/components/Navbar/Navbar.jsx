import { useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <a href="/" className="navbar-logo">
            Innovation Station
          </a>
        </Link>
        <div className="menu-icon" onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
          <Link to="/myideas" className="nav-link">
            <li>
              <a href="/" className="nav-item">
                My Ideas
              </a>
            </li>
          </Link>
          <Link to="/createpost" className="nav-link">
            <li>
              <a href="/" className="nav-item">
                New Post
              </a>
            </li>
          </Link>
          <Link to="/forum" className="nav-link">
            <li>
              <a href="/" className="nav-item">
                Innovations
              </a>
            </li>
          </Link>
          {isAuth ? null : (
            <Link to="/login" className="nav-link">
              <li>
                <a href="/" className="nav-item">
                  Login
                </a>
              </li>
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
