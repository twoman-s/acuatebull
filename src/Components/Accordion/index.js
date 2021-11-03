import React, { useEffect } from "react";
import { FAQ } from "./Data";
import {
  AccordionSection,
  InfoSec,
  InfoColumn,
  InfoRow,
  ImgWrapper,
  TopLine,
  Heading,
  Img,
} from "./AccordionElements";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Aos from "aos";
import { ButtonS } from "./../Button";
import "aos/dist/aos.css";
import { Container } from "../globalStyles";
import Lottie from "lottie-react-web";
import questions from "./questions.json";

const Faq = ({
  id,
  primary,
  imgStart,
  topPrimary,
  topLine,
  heading,
  lightHeading,
  subtitle,
  lightSub,
  alt,
  start,
  lottie,
  aos,
  list,
  listItems,
  btnText,
  btnPrimary,
  pricing,
  to,
}) => {
  const joinNow = (id) => {
    if (id === "coursedetails") {
      window.location.href = window.location.origin + "/" + id;
    } else {
      var element = document.getElementById(id);
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <InfoSec primary={primary} id={id} data-aos={aos}>
        <Container>
          <InfoRow imgStart={false}>
            <InfoColumn data-aos="zoom-in">
              <TopLine topPrimary={topPrimary}>Have Doubts?</TopLine>
              <Heading lightHeading={lightHeading}>
                Frequently Asked Questions
              </Heading>
              <ImgWrapper start={start}>
                <Lottie
                  options={{
                    animationData: questions,
                    loop: true,
                  }}
                  width="100%"
                  height="400px"
                />
              </ImgWrapper>
            </InfoColumn>
            <InfoColumn data-aos="zoom-in">
              <Accordion allowToggle width="100%">
                {FAQ.map((faq, index) => {
                  return (
                    <AccordionItem>
                      <h3>
                        <AccordionButton
                          background="#fff"
                          borderRadius="20px"
                          padding="20px"
                          color="#3f3d56"
                          border="1px solid #53b8d7"
                          fontSize="20px"
                        >
                          <Box flex="1" textAlign="left" fontSize="20px">
                            {faq.question}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h3>
                      <AccordionPanel
                        pb={4}
                        color="#fff"
                        padding="20px"
                        background="#53b8d7"
                        borderRadius="20px"
                        marginBottom="10px"
                      >
                        {faq.answer}
                      </AccordionPanel>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Faq;
