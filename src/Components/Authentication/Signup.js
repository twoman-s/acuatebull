import React, { useRef, useState } from "react";
import { useAuth } from "./../../context/AuthContext";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handlSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      console.log("pswrd not match");
      return;
    }
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      console.log("Failed to creat5e accnt");
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
        P2
        <input type="password" name="" ref={passwordConfirmRef} required />
        <br />
        <input type="submit" value="Signup" disabled={loading} />
      </form>
    </div>
  );
};

export default Signup;
