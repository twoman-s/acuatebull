import React from "react";
import Faq from "../Components/Accordion";
import InfoSection from "../Components/InfoSection";
import {
  infoOne,
  infoTwo,
  infoThree,
  infoFour,
  step1,
  step2,
  step3,
  step4,
} from "../Components/InfoSection/Data";
import StepSection from "../Components/StepsSection";
import styled from "styled-components";
import Footer from "../Components/Footer";
import Whatsapp from "../Components/whatsapp";
const Heading = styled.h1`
  margin-top: 24px;
  margin-bottom: -100px;
  font-size: 40px;
  line-height: 1.1;
  color: "#3f3d56";
  font-weight: 900;
`;
const Home = () => {
  return (
    // <>
    //   {isLoading ? (
    <>
      <InfoSection {...infoOne} />
      <InfoSection {...infoTwo} />
      {/* <InfoSection {...infoThree} /> */}
      <InfoSection {...infoFour} />
      <Heading style={{ textAlign: "center", width: "100%" }}>
        We prepare you to succeed in the Stock Market
      </Heading>
      <StepSection {...step1} />
      <StepSection {...step2} />
      <StepSection {...step3} />
      <StepSection {...step4} />
      <Faq {...infoOne} />
      <Whatsapp />
      <Footer />
    </>
    //   ) : (
    //     <>
    //       {/* preloading screen */}
    //       <Loading>
    //         <LoadingSvg src={loading} />
    //       </Loading>
    //     </>
    //   )}
    // </>
  );
};

export default Home;
