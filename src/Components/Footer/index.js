import React from "react";
import {
  FooterWrapper,
  FooterContent,
  FooterContact,
  FooterStart,
  FooterMid,
  FooterEnd,
  FooterBottom,
} from "./FooteElements";
import {
  FaPhoneSquareAlt,
  FaBuilding,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { useHistory } from "react-router-dom";
import logo from "./../../animations/levelup2.svg";

const Footer = () => {
  const history = useHistory();
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterStart>
          <img
            src={logo}
            alt="LevelUp"
            style={{ width: "200px", height: "100px", marginTop: "-25px" }}
          />

          <p></p>
          <FooterContact>
            <span>
              <FaPhoneSquareAlt style={{ fontSize: "20px" }} />
              &nbsp;+918884983843
            </span>
            <span>
              <FiMail style={{ fontSize: "20px" }} />
              &nbsp;support@levelupedu.co.in
            </span>
            <span>
              <FaBuilding style={{ fontSize: "20px" }} />
              &nbsp; No-607, Celibrity
              <br />
              Near Christ School
              <br />
              SG Palaya, Koramangala
              <br />
              Banglore Karnataka, 560029
            </span>
          </FooterContact>
        </FooterStart>
        <FooterMid>
          <h2>Quick Links </h2>
          <br />
          <ul>
            <li
              onClick={() => {
                history.push("/coursedetails");
              }}
            >
              Join Now
            </li>
            <li
              onClick={() => {
                history.push("/privacypolicy");
              }}
            >
              Privacy Policy
            </li>
            <li
              onClick={() => {
                history.push("/termsandconditions");
              }}
            >
              Terms & Conditions
            </li>
          </ul>
        </FooterMid>
        <FooterEnd>
          <h2>Social Media</h2>
          <br />
          <FaFacebookSquare
            style={{ fontSize: "40px", marginLeft: "10px", cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.facebook.com/levelupedu.co.in");
            }}
          />
          <FaInstagramSquare
            style={{ fontSize: "40px", marginLeft: "10px", cursor: "pointer" }}
            onClick={() => {
              window.open("https://www.instagram.com/level_upedu/");
            }}
          />
        </FooterEnd>
      </FooterContent>
      <FooterBottom>&copy; LevelupEdu | created by Alex Antony</FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
