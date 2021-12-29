import React, { Suspense, lazy, useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import Faq from "../Components/Accordion";
import InfoSection from "../Components/InfoSection";
import {
  infoOne,
  infoTwo,
  infoFour,
  step1,
  step2,
  step3,
  step4,
} from "../Components/InfoSection/Data";
// import StepSection from "../Components/StepsSection";
import styled from "styled-components";
import Whatsapp from "../Components/whatsapp";
import logo from "../animations/levelup2.svg";
// import Contact from "../Components/Contact";
// import Serv from "../Components/Serv";

// const InfoSection = lazy(() => import("../Components/InfoSection"));
const StepSection = lazy(() => import("../Components/StepsSection"));
const Serv = lazy(() => import("../Components/Serv"));
const Faq = lazy(() => import("../Components/Accordion"));
const Contact = lazy(() => import("../Components/Contact"));

const Heading = styled.h1`
  margin-top: 24px;
  margin-bottom: -100px;
  font-size: 40px;
  line-height: 1.1;
  color: "#3f3d56";
  font-weight: 900;
`;
export const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (window.screen.availWidth > 768) {
      let join = document.getElementById("joinbtn");
      join.style.display = "block";
    }
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    setTimeout(() => {
      let popform = document.getElementById("popupform");
      var cookies = document.cookie.split(";");
      let formShown = false;
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.includes("popupform")) {
          formShown = true;
          break;
        }
      }
      if (!formShown) {
        popform.style.display = "block";
        document.cookie = "popupform=true";
      }
    }, 17000);
  }, []);
  return (
    <>
      {loading && (
        <Loader>
          <img
            src={logo}
            alt="LevelUp"
            style={{ width: "200px", height: "100px" }}
          />
        </Loader>
      )}
      <InfoSection {...infoOne} />
      <Suspense fallback={<div />}>
        <InfoSection {...infoTwo} />
      </Suspense>
      <Suspense fallback={<div />}>
        <Serv />
      </Suspense>
      <Suspense fallback={<div />}>
        <InfoSection {...infoFour} />
      </Suspense>
      <Heading
        style={{
          textAlign: "center",
          width: "100%",
          color: "#3f3d56",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        We prepare you to succeed in the Stock Market
      </Heading>
      <Suspense fallback={<div />}>
        <StepSection {...step1} />
        <StepSection {...step2} />
        <StepSection {...step3} />
        <StepSection {...step4} />
      </Suspense>
      <Suspense fallback={<div />}>
        <Faq {...infoOne} />
      </Suspense>
      <Suspense fallback={<div />}>
        <Contact />
      </Suspense>
      <Whatsapp />
    </>
  );
};

export default Home;
