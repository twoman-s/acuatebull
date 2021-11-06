import React from "react";
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
  const { currentUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = {
      id: currentUser.uid,
      name: "Alx",
      place: "ujhygsdli",
      mobile: "9876543210",
    };
    setData(data);
  };
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <h2>Billing Address</h2>
        <label htmlFor="name">Name</label>
        <Inputs type="text" name="name" />
        <label htmlFor="phone">Mobile</label>
        <Inputs type="number" name="phone" />
        <label htmlFor="address">Address</label>
        <TextArea name="address" />
        <label htmlFor="pincode">Pin Code</label>
        <Inputs type="number" name="pincode" />
        <Submit value="Save Address" btnPrimary={true} />
      </Form>
    </FormWrapper>
  );
};

export default AddressForm;
