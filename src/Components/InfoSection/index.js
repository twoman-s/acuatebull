import React, { useEffect, useState } from "react";
import { ButtonS } from "./../Button";
import "aos/dist/aos.css";
import {
  InfoSec,
  InfoColumn,
  InfoRow,
  TextWrapper,
  TopLine,
  TopLinem,
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
import { GiMedal } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import medal from "./images/medal.png";

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
  list,
  listItems,
  btnText,
  btnPrimary,
  pricing,
  to,
  rs,
  linem,
}) => {
  const history = useHistory();
  const [heads, setHeads] = useState("heads");
  const [row, setRow] = useState("row");
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
    let head = document.getElementById("heads" + id);
    let row = document.getElementById("row" + id);
    if (id === "home") {
      head.innerHTML =
        "Learn Stock Trading <span style='color:#26d7ab'>Simply</span>";
      row.style.transform = "scale(1.1)";
    } else if (id === "about") {
      head.innerHTML =
        "India's Best <span style='color:#26d7ab'>Learning Platform</span>";
    } else if (id === "joinus") {
      head.innerHTML =
        "Master in <span style='color:#26d7ab'>Technical Ananlysis</span> & <span style='color:#26d7ab'>Trading</span> ";
    }
  }, []);
  return (
    <>
      <InfoSec primary={primary} id={id}>
        <Container>
          <InfoRow id={row + id} imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine topPrimary={topPrimary}>{topLine}</TopLine>

                <Heading id={heads + id} lightHeading={lightHeading}></Heading>
                {list ? (
                  <List listStyle={true}>
                    {listItems.map((item, index) => (
                      <>
                        <ListItem listStyle={true} key={index}>
                          <img
                            style={{ width: "80px", height: "100px" }}
                            src={medal}
                          />
                          {item}
                        </ListItem>
                      </>
                    ))}
                  </List>
                ) : (
                  <SubTitle lightSub={lightSub}>{subtitle}</SubTitle>
                )}
                <TopLinem
                  style={{
                    border: "none",
                    marginBottom: "10px",
                    textAlign: "center",
                    width: "100%",
                  }}
                  topPrimary={topPrimary}
                >
                  {rs}
                </TopLinem>
              </TextWrapper>
              {btnText ? (
                <ButtonS btnPrimary={btnPrimary} onClick={() => joinNow(to)}>
                  {btnText}
                </ButtonS>
              ) : (
                <></>
              )}
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
