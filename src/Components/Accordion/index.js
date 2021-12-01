import React from "react";
import { FAQ } from "./Data";
import { InfoSec, InfoColumn, InfoRow, Heading } from "./AccordionElements";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Faq = ({
  id,
  primary,

  lightHeading,
}) => {
  return (
    <>
      <InfoSec primary={primary} id={id}>
        <InfoRow imgStart={false}>
          <InfoColumn>
            <Heading lightHeading={lightHeading}>
              Frequently Asked Questions
            </Heading>
            <Accordion allowToggle width="100%">
              {FAQ.map((faq, index) => {
                return (
                  <AccordionItem key={index}>
                    <h3>
                      <AccordionButton
                        background="#fff"
                        // borderRadius="20px"
                        padding="20px"
                        color="#3f3d56"
                        border="none"
                        borderBottom="1px solid #26d7ab"
                        fontSize="15px"
                        width="100%"
                      >
                        <Box
                          flex="1"
                          textAlign="left"
                          fontSize="18px"
                          fontWeight="bold"
                        >
                          {faq.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel
                      pb={4}
                      color="#fff"
                      padding="20px"
                      background="#26d7ab"
                      borderRadius="20px"
                      marginBottom="10px"
                      maxWidth="800px"
                      textAlign="justify"
                    >
                      {faq.answer}
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </InfoColumn>
        </InfoRow>
      </InfoSec>
    </>
  );
};

export default Faq;
