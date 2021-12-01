import React from "react";
import {
  ContactWrapper,
  ContactContent,
  ContactImage,
  ContactDetails,
} from "./ContactElements";
import Lottie from "lottie-react-web";
import contact from "./contact.json";
import { FaWhatsapp, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContent>
        <h1>Contact Us</h1>
        <ContactDetails>
          <button
            onClick={() => {
              window.open(
                "https://wa.me/918884983843?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20LevelUp"
              );
            }}
          >
            Chat with Us
            <FaWhatsapp style={{ fontSize: "34px", marginTop: "-3px" }} />
          </button>
          <br />
          <h3>Mail us to</h3>
          <a href="mailto:support@levelupedu.co.in?subject=Details about the Course">
            <FaMailBulk />
            &nbsp;support@levelupedu.co.in
          </a>
        </ContactDetails>
      </ContactContent>
      <ContactImage>
        <Lottie
          options={{
            animationData: contact,
            loop: true,
          }}
          width="100%"
          height="500px"
        />
      </ContactImage>
    </ContactWrapper>
  );
};

export default Contact;
