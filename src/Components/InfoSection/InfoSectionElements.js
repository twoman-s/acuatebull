import styled from "styled-components";
import bg from "./images/bg.png";
import rbg from "./images/rbg.png";
import medal from "./images/medal.svg";
export const InfoSec = styled.div`
  color: #fff;
  padding: 150px 0;
  background: ${({ primary }) =>
    primary ? "url(" + bg + ")" : "url(" + rbg + ")"};
  background-repeat: no-repeat;
  @media screen and (max-width: 768px) {
    padding: 100px 0 0 0;
    background: ${({ primary }) =>
      primary ? "url(" + rbg + ")" : "url(" + bg + ")"};
    background-repeat: no-repeat;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
  @media screen and (max-width: 768px) {
    transform: scale(1) !important;
  }
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    margin-bottom: 0;
    justify-content: center;
    zoom: 1 !important;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  /* padding-bottom: 60px; */

  @media screen and (max-width: 768px) {
    /* padding-bottom: 60px; */
  }
`;
export const TopLine = styled.div`
  color: ${({ topPrimary }) => (topPrimary ? "#3f3d56" : "#53b8d7")};
  border-bottom: 1px solid #3f3d56;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  padding: 15px;
  border-radius: 15px;
  font-weight: bold;
  width: fit-content;
  /* background: ${({ topPrimary }) =>
    topPrimary
      ? "linear-gradient(to right, var(--primary), var(--secondary))"
      : "#fff"}; */
  margin-bottom: 16px;
`;
export const TopLinem = styled.div`
  color: ${({ topPrimary }) => (topPrimary ? "#3f3d56" : "#53b8d7")};
  border-bottom: 1px solid #3f3d56;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  padding: 15px;
  border-radius: 15px;
  font-weight: bold;
  width: fit-content !important;
  /* background: ${({ topPrimary }) =>
    topPrimary
      ? "linear-gradient(to right, var(--primary), var(--secondary))"
      : "#fff"}; */
  margin-bottom: 16px;
  @media screen and (max-width: 768px) {
    width: 100% !important;
    text-align: center;
  }
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightHeading }) => (lightHeading ? "#3f3d56" : "#fff")};
  font-weight: 900;
  @media screen and (max-width: 768px) {
    text-align: center;
    font-size: 2rem;
  }
`;
export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightSub }) => (lightSub ? "#3f3d56" : "#fff")};
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const List = styled.ul`
  /* list-style: none; */
  padding: 0;
  list-style-image: ${({ listStyle }) =>
    listStyle ? "url(" + medal + ")" : "none"};
  list-style-position: ${({ listStyle }) => (listStyle ? "inside" : "none")};
  /* text-indent: -25px; */
  /* margin-left: 20px; */
  @media screen and (max-width: 768px) {
    /* text-indent: -25px;
    margin-left: 20px; */
  }
`;
export const ListItem = styled.li({
  position: "relative",
  color: "#3f3d56",
  // display: "table",
  fontSize: "22px",
  margin: "20px 0",
  // border: "1px solid #fff",
  borderRadius: "25px",
  padding: "15px",
  transition: "background 1s ease",
  display: "flex",
  alignItems: "center",
  // ":hover": {
  //   background: "#fff",
  //   color: "#53b8d7",
  // },
  "@media screen and (max-width: 768px)": {
    fontSize: "18px",
    width: "110%",
    margin: "0",
    marginLeft: "-20px",
  },

  // paddingLeft: "34px",
  // "::before": {
  //   content: "''",
  //   position: "absolute",
  //   background: "blue",
  //   top: "0",
  //   left: "0",
  //   width: "30px",
  //   height: "30px",
  //   borderRadius: "30px",
  // },
});

export const Icon = styled.i`
  margin-right: 10px;
`;
