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

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword, currentUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    window.scroll(0, 0);
    if (currentUser) {
      history.push("/home");
    }
    let join = document.getElementById("joinbtn");
    join.style.display = "none";
  }, []);
  async function handlSubmit(e) {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Email id wrong or doesnot exist");
    }
    setLoading(false);
  }
  return (
    <FormWrapper>
      {loading ? <Loader /> : <></>}
      <Form onSubmit={handlSubmit}>
        <h2>Forgot Password</h2>
        {error && <Error>{error}</Error>}
        {message && <Error>{message}</Error>}
        <label htmlFor="email">Email</label>
        <Inputs type="email" name="email" ref={emailRef} required />

        <Submit value="Reset Password" disabled={loading} btnPrimary={true} />
        <Link to="/login">Login</Link>
      </Form>
    </FormWrapper>
  );
};

export default ForgotPassword;
