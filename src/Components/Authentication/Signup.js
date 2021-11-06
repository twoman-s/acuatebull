import React, { useRef, useState } from "react";
import { useAuth } from "./../../context/AuthContext";
import { useHistory, Link } from "react-router-dom";
import {
  FormWrapper,
  Form,
  Inputs,
  TextArea,
  Error,
  Submit,
} from "./AuthenticationElements";
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
    <FormWrapper>
      <Form onSubmit={handlSubmit}>
        <h2>SignUp</h2>
        <label htmlFor="email">Email</label>
        <Inputs type="email" name="email" ref={emailRef} required />
        <label htmlFor="password">Password</label>
        <Inputs type="password" name="password" ref={passwordRef} required />
        <label htmlFor="cpassword">Confirm Password</label>
        <Inputs
          type="password"
          name="cpassword"
          ref={passwordConfirmRef}
          required
        />
        <Submit value="SignUp" disabled={loading} btnPrimary={true} />
        Already have an account? &nbsp;<Link to="/login">Login here</Link>
      </Form>
    </FormWrapper>
  );
};

export default Signup;
