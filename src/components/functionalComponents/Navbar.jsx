import "../../css/App.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav style={{ backgroundColor: "pink", padding: "10px" }}>
                <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>

                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/learn-react">Learning React</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>

                    {/* AUTH LINKS */}
                    <li>
                        <Link to="/login">Login</Link>
                    </li>

                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>

                </ul>
            </nav>

            <p>The above content is Navbar</p>
        </>
    );
}

export default Navbar;
