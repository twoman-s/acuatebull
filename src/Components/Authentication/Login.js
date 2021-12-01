import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "./../../context/AuthContext";
// import { getData } from "./../../context/firestoreContext";

import { useHistory, Link, useLocation } from "react-router-dom";
import {
  FormWrapper,
  Form,
  Inputs,
  Error,
  Submit,
  Loader,
} from "./AuthenticationElements";

const Login = ({ state }) => {
  let location = useLocation();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [error, setError] = useState("");
  async function handlSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      if (location.state.from === "/coursedetails")
        history.push("/coursedetails");
      else history.push("/");
    } catch {
      setError("User name or password is wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    window.scroll(0, 0);
    if (currentUser) {
      history.push("/");
    }
    let join = document.getElementById("joinbtn");
    join.style.display = "none";
  }, []);
  return (
    <FormWrapper>
      {loading ? <Loader /> : <></>}
      <Form onSubmit={handlSubmit}>
        <h2>LogIn</h2>
        {error && <Error>{error}</Error>}
        <label htmlFor="email">Email</label>
        <Inputs type="email" name="email" ref={emailRef} required />
        <label htmlFor="password">Password</label>
        <Inputs type="password" name="password" ref={passwordRef} required />
        <Submit value="Login" disabled={loading} btnPrimary={true} />
        Don't have an account? &nbsp;<Link to="/signup">Signup here</Link>
        <br />
        <Link to="/forgotpassword">Forgot Password?</Link>
      </Form>
    </FormWrapper>
  );
};

export default Login;
