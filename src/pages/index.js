import React from "react";
import Faq from "../Components/Accordion";
import InfoSection from "../Components/InfoSection";
import {
  infoOne,
  infoTwo,
  infoThree,
  infoFour,
} from "../Components/InfoSection/Data";

// import Services from "../Components/WhyUs";

const Home = () => {
  return (
    // <>
    //   {isLoading ? (
    <>
      <InfoSection {...infoOne} />
      <InfoSection {...infoTwo} />
      <InfoSection {...infoThree} />
      <InfoSection {...infoFour} />
      <Faq {...infoOne} />
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
