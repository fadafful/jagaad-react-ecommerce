import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = {
        data: { jwt: "asdasdfdasfadf", refreshToken: "adfasdfasdfasdfadsf" },
      }; //await axios.post("/auth/login", { username, password });

      const { jwt, refreshToken } = res.data;
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("refreshToken", refreshToken);
      window.location = "/dashboard";
    } catch (err) {
      setError("Incorrect username or password");
    }
  };

  return (
    <>
      <div className="login">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="error">{error}</p>}
          <label>Username or email address</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
      <div className="register">
        <h2>Register</h2>
        <form>
          <label>Email address</label>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <p>
            A link to set a new password will be sent to your email address.
          </p>
          <p>
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Login;
