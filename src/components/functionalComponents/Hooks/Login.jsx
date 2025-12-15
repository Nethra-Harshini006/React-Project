import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2>Login</h2>

      <input type="text" placeholder="Username" />
      <br /><br />

      <input type="password" placeholder="Password" />
      <br /><br />

      <button>Login</button>

      <p>
        Not registered? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
