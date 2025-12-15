import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h2>Signup</h2>

      <input type="text" placeholder="Username" />
      <br /><br />

      <input type="email" placeholder="Email" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button>Signup</button>

      <p>
        Already registered? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
