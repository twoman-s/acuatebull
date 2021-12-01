import React, { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => {
    window.scroll(0, 0);
    let join = document.getElementById("joinbtn");
    join.style.display = "none";
  }, []);
  return (
    <div style={{ padding: "40px", marginTop: "40px", color: "#3f3d56" }}>
      <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
        Terms and Conditions
      </h2>
      <h4>Registration and Admission</h4>
      <p>
        To join LevelUp you must be atleast 13 years old. After payment of fee
        we will share you the credential details on your registered email
      </p>
      <h4>Duration and Validity</h4>
      <p>
        Course content and community access is life time free. But if you want
        to schedulethe doubt solving session after first two months you have to
        pay additional 300Rs for every two months
      </p>
      <h4>LevelUp account and Community access</h4>
      <p>
        Once the payment is done you acount will be activated with in 1-2
        working days(Non working days and settlement holidays are not included).
        At a time you are only allowed to use one account for one payment, if
        you want to modify your email by requesting to our customer support,
        after modification your previous email from our community will be
        removed, same is applicable for the discord community also.
      </p>
      <h4>Content</h4>
      <p>
        Content will be under copyright act. If any person violated or sharing
        to an unauthorized person, you may face legal consequences based on
        copyright act
      </p>
      <h4>Termination</h4>
      <p>
        If any unethical activity held from your side LevelUp have the right to
        terminate your account
      </p>
      <h4>Payment and Refund Policy</h4>
      <p>
        Your account will only get activated once company received your payment
        confirmation. If payment delayed due to any third party or bank side
        issue you have to wait till the issue is resolved. Once you have done
        the payment it is not refundable and you don't have the right to cancel
        the admission
      </p>
      <h4>Website modification</h4>
      <p>
        LevelUp have the right to modify their website and community channels at
        any point of time
      </p>
    </div>
  );
};

export default TermsConditions;
