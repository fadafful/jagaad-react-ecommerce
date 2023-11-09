import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Info from "../components/Info";
import Footer from "../components/footer/Footer";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100vw;

  form input {
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid rgba(159, 159, 159, 1);
  }

  button {
    border-radius: 15px;
    border: 1px solid #000;
    padding: 17px 78px;

    cursor: pointer;
  }

  .login {
    padding: 0 1rem;
  }

  .login form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .form-btn {
    display: flex;
    justify-content: space-between;
  }

  .register {
    padding: 0 1rem;
  }

  .register form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .register-form-btn {
    width: min-content;
  }

  @media only screen and (min-width: 1200px) and (max-width: 1920px) {
    flex-direction: row;

    .login {
      width: 50%;
      padding: 50px 100px 50px 230px;
    }

    .register {
      width: 50%;
      padding: 50px 230px 50px 100px;
    }
  }
`;

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
      <Container>
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
            <div className="form-btn">
              <button className="form-btn-login" type="submit">
                Login
              </button>
              <Link to="/">Lost Your Password</Link>
            </div>
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
            <button className="register-form-btn" type="submit">
              Register
            </button>
          </form>
        </div>
      </Container>
      <Info />
      <Footer />
    </>
  );
};

export default Login;
