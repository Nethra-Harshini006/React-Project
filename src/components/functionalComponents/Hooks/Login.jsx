import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const req = await axios.post(
        "https://backend-express-1911.onrender.com/login",
        {
          email,
          password,
        }
      );

      const { message, isLoggedIn } = req.data;

      if (isLoggedIn) {
        localStorage.setItem("isLogin", "true"); // ✅ STORE LOGIN
        alert(message);
        navigate("/");
        window.location.reload(); // 🔥 FORCE NAVBAR UPDATE
      }
    } catch (e) {
      alert("Login Failed");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>

      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Password:</label>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">Login</button>
      </form>

      <p>
        Create an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
