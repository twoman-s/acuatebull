import styled from "styled-components";
// import bg from "./images/bg.png";
// import rbg from "./images/rbg.png";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 50px;

  background-repeat: no-repeat;
  height: 400px;
  @media screen and (max-width: 768px) {
    height: 700px;
    padding: 160px 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  right: 0;
  /* padding-bottom: 60px; */

  @media screen and (max-width: 768px) {
    /* padding-bottom: 60px; */
  }
`;
export const TopLine = styled.div`
  color: ${({ topPrimary }) => (topPrimary ? "#fff" : "#53b8d7")};
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 1.4px;
  padding: 15px;
  border-radius: 25px;
  width: fit-content;
  background: ${({ topPrimary }) =>
    topPrimary
      ? "linear-gradient(to right, var(--primary), var(--secondary))"
      : "#fff"};
  margin-bottom: 16px;
`;
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  color: ${({ lightHeading }) => (lightHeading ? "#3f3d56" : "#fff")};
  font-weight: 900;
`;
export const SubTitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightSub }) => (lightSub ? "#3f3d56" : "#fff")};
`;
export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: center;
`;
export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 300px;
`;

export const List = styled.ul`
  /* list-style: none; */
  padding: 0;
`;
export const ListItem = styled.li({
  position: "relative",
  color: "#3f3d56",
  display: "table",
  fontSize: "24px",
  margin: "20px 0",
  // border: "1px solid #fff",
  borderRadius: "25px",
  padding: "15px",
  transition: "background 1s ease",
  // ":hover": {
  //   background: "#fff",
  //   color: "#53b8d7",
  // },
  "@media screen and (max-width: 768px)": {
    fontSize: "18px",
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
