import { useState } from "react";
import useLogin from "./hooks/useLogin";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isLoading, error } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginSuccess = await login(email, password);

    if (loginSuccess) {
      // Redirect to the services page
      navigate('/OurServices');
    }
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Log In</h3>

      <div className="form-group">
        <label>Email address:</label>
        <input
          type="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </div>

      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button className="btn btn-default border w-100 bg-light rounded-0" disabled={isLoading}>
        Log in
      </button>

      {error && <div className="error">{error}</div>}

      <p className="mt-3">Do not have an account?</p>
      <Link to="/SignUp" className="btn btn-default border w-100 bg-light  rounded-0 text-decoration-none w-100">
        Signup
      </Link>
    </form>
  );
};

export default Login;
