import React, { useRef, useState, useEffect } from "react";
import { useAuth } from "./../../context/AuthContext";
import { useHistory, Link } from "react-router-dom";
import {
  FormWrapper,
  Form,
  Inputs,
  Error,
  Submit,
  Loader,
} from "./AuthenticationElements";
const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [error, setError] = useState("");
  async function handlSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create account or email id already exist");
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
        <h2>
          Sign Up{" "}
          <small style={{ color: "#26d7ab", fontSize: "13px" }}>
            (Please use a valid email address)
          </small>
        </h2>
        {error && <Error>{error}</Error>}
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
