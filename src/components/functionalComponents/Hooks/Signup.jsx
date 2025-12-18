import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://backend-express-1911.onrender.com/signup",
        {
          email,
          username,
          password,
        }
      );
      alert(response.data.Message);
    } catch (error) {
      alert("Signup Failed");
    }
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already having an account?<Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
