import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const style = {
  position: "fixed",
  height: "50px",
  width: "50px",
  bottom: "20px",
  right: "20px",
  zIndex: "99",
  background: "#25D366",
  borderRadius: "50%",
  cursor: "pointer",
};
const font = {
  fontSize: "50px",
  color: "#fff",
};
const Whatsapp = () => {
  const openWhatsapp = () => {
    window.open(
      "https://wa.me/918884983843?text=Hi,%20I%20would%20like%20to%20know%20more%20about%20LevelUp"
    );
  };
  return (
    <div style={style} onClick={openWhatsapp}>
      <FaWhatsapp style={font} />
    </div>
  );
};

export default Whatsapp;
