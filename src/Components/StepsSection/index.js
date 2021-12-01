import React from "react";

import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  Heading,
  SubTitle,
  ImgWrapper,
  Img,
  List,
  ListItem,
} from "./StepsElements";
import Lottie from "lottie-react-web";
import Card from "./../Services/Card";
import { FiCheckCircle } from "react-icons/fi";

const StepSection = ({
  id,
  primary,
  imgStart,
  topPrimary,
  topLine,
  heading,
  lightHeading,
  subtitle,
  lightSub,
  img,
  alt,
  start,
  lottie,
  aos,
  list,
  listItems,
  pricing,
}) => {
  return (
    <>
      <InfoSec primary={primary} id={id}>
        <InfoRow imgStart={imgStart}>
          <InfoColumn>
            <TextWrapper>
              <TopLine topPrimary={topPrimary}>{topLine}</TopLine>
              <Heading lightHeading={lightHeading}>{heading}</Heading>
              {list ? (
                <List>
                  {listItems.map((item, index) => (
                    <ListItem key={index}>
                      <FiCheckCircle />
                      &nbsp;
                      {item}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <SubTitle lightSub={lightSub}>{subtitle}</SubTitle>
              )}
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper start={start}>
              {pricing ? (
                <Card listItems={listItems} />
              ) : lottie ? (
                <Lottie
                  options={{
                    animationData: img,
                    loop: true,
                  }}
                  width="100%"
                  height="300px"
                />
              ) : (
                <Img src={img} alt={alt} />
              )}
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </InfoSec>
    </>
  );
};

export default StepSection;
