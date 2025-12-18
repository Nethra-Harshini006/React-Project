import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../css/App.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 🔁 Check login status on load
  useEffect(() => {
    const loginStatus = localStorage.getItem("isLogin");
    if (loginStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* ✅ HOVER DROPDOWN */}
        <li className="dropdown">
          <span className="dropdown-title">Learning React ▾</span>

          <ul className="dropdown-menu">
            <li><Link to="/learning/usestate">useState</Link></li>
            <li><Link to="/learning/useeffect">useEffect</Link></li>
            <li><Link to="/learning/useref">useRef</Link></li>
            <li><Link to="/learning/usememo">useMemo</Link></li>
            <li><Link to="/learning/usecallback">useCallback</Link></li>
          </ul>
        </li>

        <li><Link to="/contact">Contact</Link></li>

        {/* ✅ LOGIN / LOGOUT TOGGLE */}
        <li>
          {isLoggedIn ? (
            <span className="auth-btn" onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>

        {!isLoggedIn && (
          <li><Link to="/signup">Signup</Link></li>
        )}

      </ul>
    </nav>
  );
}

export default Navbar;
