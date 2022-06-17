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
const sdk = require("api")("@cashfreedocs-new/v2#ebj9bj1sl1asf5c6");

let API_URL = "";
let API_VERSION = "2022-01-01";
const X_CLIENT_ID = "132679bf1b93f2e3dab7ba8f0a976231";
const X_SECRET_ID = "f46f2b3705f828472758379cd4f4721713919648";

const CourseDetails = () => {
  if (window.location.hostname === "levelupedu.co.in") {
    API_URL = "https://api.cashfree.com/pg";
  } else if (window.location.hostname === "localhost") {
    API_URL = "https://sandbox.cashfree.com/pg";
  }
  const [address, setAddress] = useState(false);
  let location = useLocation();
  const [paid, setPaid] = useState(false);
  const [userAddress, setUserAddress] = useState();
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();
  const history = useHistory();
  const createOrder = () => {
    console.log(sdk);
  };

  function buyNow(e) {
    e.preventDefault();
    if (currentUser) {
      console.log(currentUser);
      if (!address) {
        history.push({
          pathname: "/address",
          state: {
            from: window.location.pathname,
          },
        });
        return;
      }
      createOrder();
      // window.open("https://www.cashfree.com/product/12173");
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
