import React, { useRef, useState } from "react";
import { useAuth } from "./../../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handlSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      console.log("Failed to login");
    }
    setLoading(false);
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <form onSubmit={handlSubmit}>
        EMAIL
        <input type="email" name="mail" ref={emailRef} required /> <br />
        P1
        <input type="password" name="" ref={passwordRef} required />
        <br />
        <input type="submit" value="Login" disabled={loading} />
      </form>
    </div>
  );
};

export default Login;
