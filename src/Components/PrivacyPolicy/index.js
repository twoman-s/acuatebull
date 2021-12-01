import React, { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scroll(0, 0);
    let join = document.getElementById("joinbtn");
    join.style.display = "none";
  }, []);
  return (
    <div style={{ padding: "40px", marginTop: "40px", color: "#3f3d56" }}>
      <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
        Privacy Policy
      </h2>
      <h4>Collection of Information</h4>
      <p>
        We will collect your basic informations like name, phone number and
        email id for identification and account activation purposes
      </p>
      <h4>Payment Details</h4>
      <p>
        We will not share your payment details with any other third party or any
        person
      </p>
      <h4>Data Sharing</h4>
      <p>
        Your personal data will be safe with in our hands and we will not share
        it with any other third party or any person
      </p>
      <h4>Account activation and modification</h4>
      <p>
        Any issue regarding account activation and modification you can directly
        connect with our support care on Monday to Friday from 9.30AM to 5PM
        (Except holidays)
      </p>
    </div>
  );
};

export default PrivacyPolicy;
