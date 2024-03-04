import React, { useState } from "react";
import useSignup from './hooks/useSignup';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
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

      <button className="btn btn-default border w-100 bg-light text-black rounded-0" disabled={isLoading}>
        Sign up
      </button>
      
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
