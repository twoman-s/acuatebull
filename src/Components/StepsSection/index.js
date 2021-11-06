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
} from "./StepsElements";
import { Container } from "../globalStyles";
import Lottie from "lottie-react-web";
import Card from "./../Services/Card";
import { FiCheckCircle } from "react-icons/fi";
import { useHistory } from "react-router-dom";

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
        </Container>
      </InfoSec>
    </>
  );
};

export default StepSection;
