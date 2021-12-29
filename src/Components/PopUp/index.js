import React, { useState } from "react";
import { Loader, PopupWrapper } from "./PopUpElements";
import success from "./success.png";
import { useHistory } from "react-router-dom";
import { setSubscriberData } from "./../../context/firestoreContext";

const PopUp = () => {
  const history = useHistory();
  return (
    <Loader id="popup">
      <PopupWrapper>
        <img src={success} alt="Payment success" />
        <br />
        <h3>Thankyou for the purchase</h3>
        <br />
        <p>Your payment details will be updated on the profile page shortly</p>
        <p>
          Your Course credentials will be send to you registered email address
          shortly.
        </p>
        <button
          onClick={() => {
            history.push("/profile");
          }}
        >
          Goto Profile
        </button>
        <button
          onClick={() => {
            let popup = document.getElementById("popup");
            popup.style.display = "none";
          }}
        >
          Close
        </button>
      </PopupWrapper>
    </Loader>
  );
};

export default PopUp;

const instyle = {
  width: "70%",
  border: "1px solid lightgrey",
  borderRadius: "20px",
  padding: "15px",
  marging: "15px",
  background: "#efefef4d",
  color: "#3f3d56",
  outline: "none",
};

export const PopUpForm = ({ coupon }) => {
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  return (
    <Loader id="popupform">
      <PopupWrapper form={true}>
        <br />
        <h3>Get a free consultation now</h3>
        <br />
        <input
          style={instyle}
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <br />
        <br />
        <input
          style={instyle}
          type="number"
          placeholder="Phone number"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          required
        />
        <br />
        <button
          onClick={() => {
            let popup = document.getElementById("popupform");

            let data = {
              name: name,
              number: mobile,
              date: new Date().toString(),
            };
            if (name && mobile) {
              popup.style.display = "none";
              setSubscriberData(data);
              document.cookie = "subscribed=true";
            }
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            let popup = document.getElementById("popupform");
            popup.style.display = "none";
          }}
        >
          Close
        </button>
      </PopupWrapper>
    </Loader>
  );
};
