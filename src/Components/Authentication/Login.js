import React, { useRef, useState } from "react";
import { useAuth } from "./../../context/AuthContext";
import { getData } from "./../../context/firestoreContext";

import { useHistory, Link } from "react-router-dom";
import {
  FormWrapper,
  Form,
  Inputs,
  TextArea,
  Error,
  Submit,
} from "./AuthenticationElements";
const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  async function handlSubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");

      // console.log(add);
      // if (add) {
      //   history.push("/");
      // } else {
      //   history.push("/address");
      // }
    } catch {
      console.log("Failed to login");
    }
    setLoading(false);
  }
  return (
    <FormWrapper>
      <Form onSubmit={handlSubmit}>
        <h2>LogIn</h2>
        <label htmlFor="email">Email</label>
        <Inputs type="email" name="email" ref={emailRef} required />
        <label htmlFor="password">Password</label>
        <Inputs type="password" name="password" ref={passwordRef} required />
        <Submit value="Login" disabled={loading} btnPrimary={true} />
        Don't have an account? &nbsp;<Link to="/signup">Signup here</Link>
      </Form>
    </FormWrapper>
  );
};

export default Login;
