import React, { useEffect } from "react";
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
} from "./CourseElements";
import { coursedetails } from "./Data";
import Lottie from "lottie-react-web";
import book from "./book.json";
import { ButtonL } from "./../Components/Button";
import { useAuth } from "./../context/AuthContext";
import { useHistory } from "react-router-dom";
import { createOrder } from "./../context/RazorPayContext";

const CourseDetails = () => {
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
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("Somthing went wrong with Razorpay");
      return;
    }
    var logo =
      "https://i.pinimg.com/originals/36/70/78/3670786206314afa382be6c677f592c4.jpg";
    const oid = createOrder();
    const options = {
      key: "rzp_test_Y5tlqQ0O8yOPLG",
      amount: "199900",
      currency: "INR",
      name: "Acme Corp",
      description: "Test Transaction",
      image: logo,
      order_id: oid,
      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#5bD873",
      },
    };
    var paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  function buyNow(e) {
    e.preventDefault();
    if (currentUser) {
      displayRazorpay();
    } else {
      history.push("/signup");
    }
  }
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <CourseWrapper>
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
            <Price>{coursedetails.price}</Price>
          </ProductPrice>
          <ProductDetails>
            <h2>About Course</h2>
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
          </ProductDetails>
          <ButtonL btnPrimary={true} onClick={(e) => buyNow(e)}>
            Buy Now
          </ButtonL>
        </CourseContent>
      </CourseCard>
    </CourseWrapper>
  );
};

export default CourseDetails;
