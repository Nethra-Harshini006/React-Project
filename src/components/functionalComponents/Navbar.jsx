import { Link } from "react-router-dom";
import "../../css/App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>

        {/* Dropdown */}
        <li className="dropdown">
          <span>Learning React ▾</span>
          <ul className="dropdown-menu">
            <li><Link to="/learning/usestate">useState</Link></li>
            <li><Link to="/learning/useeffect">useEffect</Link></li>
            <li><Link to="/learning/useref">useRef</Link></li>
            <li><Link to="/learning/usememo">useMemo</Link></li>
            <li><Link to="/learning/usecallback">useCallback</Link></li>
          </ul>
        </li>

        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
