import React, { useRef, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  FormWrapper,
  Form,
  Inputs,
  TextArea,
  Error,
  Submit,
} from "./AddressElements";

import { setData } from "./../../context/firestoreContext";
import { useAuth } from "./../../context/AuthContext";

const AddressForm = () => {
  let location = useLocation();
  const history = useHistory();
  const { currentUser } = useAuth();
  const nameRef = useRef();
  const mobileRef = useRef();
  const addressRef = useRef();
  const pinRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = {
      id: currentUser.uid,
      name: nameRef.current.value,
      mobile: mobileRef.current.value,
      email: currentUser.email,
      address: addressRef.current.value,
      pincode: pinRef.current.value,
      date: new Date().toString(),
    };
    setData(data);
    if (location.state.from === "/coursedetails")
      history.push({
        pathname: "/coursedetails",
        state: {
          from: window.location.pathname,
        },
      });
  };
  useEffect(() => {
    window.scroll(0, 0);
    let join = document.getElementById("joinbtn");
    join.style.display = "none";
  }, []);
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Billing Address</h2>
        <label htmlFor="name">Name</label>
        <Inputs ref={nameRef} type="text" name="name" />
        <label htmlFor="phone">Mobile</label>
        <Inputs ref={mobileRef} type="number" name="phone" />
        <label htmlFor="address">Address</label>
        <TextArea ref={addressRef} name="address" />
        <label htmlFor="pincode">Pin Code</label>
        <Inputs ref={pinRef} type="number" name="pincode" />
        <Submit value="Save & Proceed" btnPrimary={true} />
      </Form>
    </FormWrapper>
  );
};

export default AddressForm;
