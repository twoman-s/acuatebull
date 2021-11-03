import React, { useEffect } from "react";
import Aos from "aos";
import { ButtonS } from "./../Button";
import "aos/dist/aos.css";
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
} from "./InfoSectionElements";
import { Container } from "../globalStyles";
import Lottie from "lottie-react-web";
import Card from "./../Services/Card";
import { FiCheckCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";

const InfoSection = ({
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
  btnText,
  btnPrimary,
  pricing,
  to,
}) => {
  const history = useHistory();
  const joinNow = (id) => {
    if (id === "coursedetails") {
      history.push("/coursedetails");
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
          <InfoRow imgStart={imgStart}>
            <InfoColumn data-aos="zoom-in">
              <TextWrapper>
                <TopLine topPrimary={topPrimary}>{topLine}</TopLine>
                <Heading lightHeading={lightHeading}>{heading}</Heading>
                {list ? (
                  <List data-aos="zoom-in">
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
              {btnText ? (
                <ButtonS btnPrimary={btnPrimary} onClick={() => joinNow(to)}>
                  {btnText}
                </ButtonS>
              ) : (
                <></>
              )}
            </InfoColumn>
            <InfoColumn data-aos="zoom-in">
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
                    height="500px"
                  />
                ) : (
                  <Img src={img} alt={alt} />
                )}
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
