import React, { useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getData, getPaymentInfo } from "../../context/firestoreContext";
import {
  ProfileWrapper,
  UserWrapper,
  PayInfoWrapper,
  AddressWrapper,
  Loader,
} from "./ProfileElements";
import { FaUserAlt } from "react-icons/fa";
import { InputLeftAddon } from "@chakra-ui/react";

const Profile = () => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const [paymentInfo, setpaymentInfo] = useState();
  async function u() {
    if (currentUser) {
      const data = await getData(currentUser.uid);
      const payInfo = await getPaymentInfo(currentUser.uid);
      if (Object.keys(payInfo).length !== 0 && payInfo.constructor === Object) {
        setpaymentInfo(payInfo.payload.payment.entity);
        setLoading(false);
      }
      if (Object.keys(data).length !== 0 && data.constructor === Object) {
        setUser(data);
        setLoading(false);
      }
      setLoading(false);
    }
  }
  useEffect(() => {
    window.scroll(0, 0);
    u();
    let join = document.getElementById("joinbtn");
    join.style.display = "none";
  }, []);
  return (
    <ProfileWrapper>
      {loading ? <Loader /> : <></>}
      {currentUser ? (
        <>
          <UserWrapper>
            <FaUserAlt style={{ height: "150px", width: "150px" }} />
            <h3 style={{ marginTop: "15px", fontWeight: "900" }}>
              {user ? <> {user.name} </> : currentUser.uid}
            </h3>
          </UserWrapper>
          <AddressWrapper>
            <h3 style={{ marginTop: "15px", fontWeight: "900" }}>Address</h3>
            <table style={{ height: "90%", width: "100%" }}>
              <tbody>
                <tr>
                  <td>Email</td>
                  <td>{currentUser.email}</td>
                </tr>
                <tr>
                  <td>Address</td>
                  <td>{user ? user.address : "Not Available"}</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>{user ? user.mobile : "Not Available"}</td>
                </tr>
                <tr>
                  <td>PinCode</td>
                  <td>{user ? user.pincode : "Not Available"}</td>
                </tr>
              </tbody>
            </table>
          </AddressWrapper>
          {paymentInfo ? (
            <PayInfoWrapper>
              <h3 style={{ marginTop: "15px", fontWeight: "900" }}>
                Payment Information
              </h3>
              <table style={{ height: "90%", width: "100%" }}>
                <tbody>
                  <tr>
                    <td>Payment ID</td>
                    <td>{paymentInfo.id}</td>
                  </tr>
                  <tr>
                    <td>Order Id</td>
                    <td>{paymentInfo.order_id}</td>
                  </tr>
                  <tr>
                    <td>Amount</td>
                    <td>{Number(paymentInfo.amount) / 100}</td>
                  </tr>
                  <tr>
                    <td>Date Time</td>
                    <td>
                      {new Date(paymentInfo.created_at * 1000).toString()}
                    </td>
                  </tr>

                  <tr>
                    <td>Payment Method</td>
                    <td>{paymentInfo.method} </td>
                  </tr>
                </tbody>
              </table>
            </PayInfoWrapper>
          ) : (
            <></>
          )}
        </>
      ) : (
        <></>
      )}
    </ProfileWrapper>
  );
};

export default Profile;
