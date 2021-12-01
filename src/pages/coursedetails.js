import React, { useEffect, useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import {
  CourseWrapper,
  CourseCard,
  CourseImg,
  CourseContent,
  ChHead,
  ProductPrice,
  Price,
  ProductDetails,
  PList,
  LItem,
  Loader,
} from "./CourseElements";
import { coursedetails } from "./Data";
import Lottie from "lottie-react-web";
import book from "./book.json";
import { ButtonL } from "./../Components/Button";
import { useAuth } from "./../context/AuthContext";
import { getData, getPaymentInfo } from "./../context/firestoreContext";
import { useHistory, useLocation } from "react-router-dom";
import PopUp from "../Components/PopUp";
import logo from "../animations/levelup.jpg";

let API_URL = "";

const CourseDetails = () => {
  if (window.location.hostname === "levelupedu.co.in") {
    API_URL = "https://razorpaymentbackend.herokuapp.com/";
  } else if (window.location.hostname === "localhost") {
    API_URL = "https://razorpaymentbackend.herokuapp.com/";
  }
  const [address, setAddress] = useState(false);
  let location = useLocation();
  const [paid, setPaid] = useState(false);
  const [userAddress, setUserAddress] = useState();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();

  function loadRazorpay(link) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = link;

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  async function displayRazorpay() {
    setLoading(true);
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Somthing went wrong with Razorpay");
      return;
    }
    const data = await fetch(API_URL + "payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: currentUser.uid }),
    }).then((t) => t.json());
    console.log(data);
    const options = {
      key: data.key_id,
      amount: data.amount.toString(),
      currency: data.currency,
      name: "Levelup",
      description: "Master in Technical Analysis & Trading course fee",
      image: logo,
      order_id: data.id,
      handler: function (response) {
        // alert(response.razorpay_payment_id);
        // alert(response.razorpay_order_id);
        // alert(response.razorpay_signature);
        setLoading(false);
        let popup = document.getElementById("popup");
        popup.style.display = "block";
        var data = {
          id: currentUser.uid,
          name: userAddress.name,
          order_id: response.razorpay_order_id,
          // amount: data.amount.toString(),
        };
        console.log(data);
        // history.push("/profile");
      },
      prefill: {
        email: currentUser.email,
        contact: "+91" + userAddress.mobile,
      },
      notes: {
        address: "LevelUp",
      },
      theme: {
        color: "#26d7ab",
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  }

  function buyNow(e) {
    e.preventDefault();

    if (currentUser) {
      if (!address) {
        history.push({
          pathname: "/address",
          state: {
            from: window.location.pathname,
          },
        });
        return;
      }
      displayRazorpay();
    } else {
      history.push({
        pathname: "/login",
        state: {
          from: window.location.pathname,
        },
      });
    }
  }
  async function u() {
    if (currentUser) {
      const data = await getData(currentUser.uid);
      const payInfo = await getPaymentInfo(currentUser.uid);
      if (Object.keys(data).length !== 0 && data.constructor === Object) {
        setUserAddress(data);
        setAddress(true);
      } else {
        setAddress(false);
      }
      if (Object.keys(payInfo).length !== 0 && payInfo.constructor === Object) {
        setPaid(true);
      } else {
        setPaid(false);
      }
    }
  }
  let cstyle = {
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    color: "#26d7ab",
    outline: "none",
    margin: "5px",
    width: "120px",
    background: "#fff",
  };
  useEffect(() => {
    window.scroll(0, 0);
    u();

    let join = document.getElementById("joinbtn");
    join.style.display = "none";
  }, []);
  useEffect(() => {
    if (address) {
      if (location.state && location.state.from === "/address") {
        let btn = document.getElementById("buycourse");
        if (btn) {
          btn.click();
        }
      }
    }
  }, [address]);
  return (
    <CourseWrapper>
      {loading ? (
        <Loader>
          <h4 style={{ color: "#fff" }}>Please Wait...</h4>
        </Loader>
      ) : (
        <></>
      )}
      <PopUp />
      <CourseCard>
        <CourseImg>
          <Lottie
            options={{
              animationData: book,
              loop: true,
            }}
            width="100%"
            height="500px"
          />
        </CourseImg>
        <CourseContent>
          <ChHead>{coursedetails.title}</ChHead>
          <ProductPrice>
            <Price>
              <span>Rs.3999/-&nbsp;</span>&nbsp;
              {coursedetails.price}
            </Price>
          </ProductPrice>
          <ProductDetails>
            <h2 style={{ color: "#26d7ab" }}>About Course</h2>
            <p>{coursedetails.aboutCourse}</p>
            <PList>
              <p>Contents</p>
              {coursedetails.contents.map((content, index) => {
                return (
                  <LItem key={index}>
                    <FiChevronRight />
                    &nbsp;{content}
                  </LItem>
                );
              })}
            </PList>
            <p style={{ fontWeight: "bold" }}>Available Languages</p>
            <button style={{ ...cstyle, border: "1px solid #26d7ab" }}>
              Malayalam
            </button>
            <button
              style={{ ...cstyle, background: "#efefef4d", color: "#1010104d" }}
            >
              English
            </button>
            <button
              style={{ ...cstyle, background: "#efefef4d", color: "#1010104d" }}
            >
              Hindi
            </button>
          </ProductDetails>
          <small style={{ fontSize: "11px", marginLeft: "10px" }}>
            *T&C apply
          </small>
          {paid ? (
            <ButtonL
              btnPrimary={true}
              style={{ pointerEvents: "none" }}
              course={true}
            >
              Thank you for your Purchase
            </ButtonL>
          ) : (
            <ButtonL
              id="buycourse"
              btnPrimary={true}
              course={true}
              onClick={(e) => buyNow(e)}
            >
              Buy Now
            </ButtonL>
          )}
        </CourseContent>
      </CourseCard>
      <CourseContent>
        <h2
          style={{
            color: "#26d7ab",
          }}
        >
          Main Features
        </h2>
        <PList
          style={{
            listStyleType: "circle !important",
            listStylePosition: "inside !important",
          }}
        >
          {coursedetails.features.map((feature, index) => {
            return (
              <LItem
                key={index}
                style={{
                  fontWeight: "bold",
                  display: "list-item!important",
                  marginLeft: "20px",
                }}
                listStyle={true}
              >
                {feature}
              </LItem>
            );
          })}
        </PList>
      </CourseContent>
      <h2 style={{ color: "#26d7ab", marginLeft: "15px" }}>Modules</h2>
      <CourseCard>
        <CourseContent>
          <PList>
            <p>Module I - Basics of Stock market and Technical Analysis</p>
            {coursedetails.module1.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
        <CourseContent>
          <PList>
            <p>Module II - Charts and Trends</p>
            {coursedetails.module2.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
        <CourseContent>
          <PList>
            <p>Module III - Candlestick patterns and Candle indications</p>
            {coursedetails.module3.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
        <CourseContent>
          <PList>
            <p>Module IV - Support and Resistance</p>
            {coursedetails.module4.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
        <CourseContent>
          <PList>
            <p>Module V - Moving Averages</p>
            {coursedetails.module5.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
        <CourseContent>
          <PList>
            <p>Module VI - Swing Trading and Breakout trading</p>
            {coursedetails.module6.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
        <CourseContent>
          <PList>
            <p>Module VII - -Price action patterns</p>
            {coursedetails.module7.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
        <CourseContent>
          <PList>
            <p>Module VIII - Trade using Indicators</p>
            {coursedetails.module8.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
        <CourseContent>
          <PList>
            <p>Module IX - Practical Applications</p>
            {coursedetails.module9.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
        <CourseContent>
          <PList>
            <p>Module X - Live Trading</p>
            {coursedetails.module10.map((feature, index) => {
              return (
                <LItem key={index}>
                  <FiChevronRight />
                  &nbsp;{feature}
                </LItem>
              );
            })}
          </PList>
        </CourseContent>
      </CourseCard>
    </CourseWrapper>
  );
};

export default CourseDetails;
