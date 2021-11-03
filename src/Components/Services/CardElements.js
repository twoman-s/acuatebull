import styled from "styled-components";

export const CardWrapper = styled.div({
  height: "400px",
  width: "300px",
  background: "#fff",
  boxShadow: "0px 25px 50px rgba(0,0,0,0.6)",
  borderRadius: "30px",
});
export const ContentDesc = styled.p({
  fontSize: "24px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  top: "40px",
  left: "-15px",
  width: "300px",
  height: "50px",
  background: "linear-gradient(to right, var(--primary), var(--secondary));",
  borderRadius: "30px",
  borderBottomLeftRadius: "0",
  letterSpacing: "5px",
  fontWeight: "bold",
  color: "#fff",
  "::before": {
    content: "''",
    background: "var(--secondary)",
    position: "absolute",
    width: "15px",
    height: "30px",
    top: "50px",
    left: "0",
    borderTopLeftRadius: "20px",
    borderBottomLeftRadius: "20px",
    zIndex: "2",
  },
  "::after": {
    content: "''",
    background: "var(--primary)",
    position: "absolute",
    width: "15px",
    height: "15px",
    top: "50px",
    left: "0",
  },
});

export const CardContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: auto;
`;

export const ContentHead = styled.h2``;

export const List = styled.ul`
  padding: 30px;
`;
export const ListItem = styled.li({
  position: "relative",
  color: "#3f3d56",
  display: "table",
  fontSize: "20px",
  // margin: "10px 0",
  // border: "1px solid #fff",
  borderRadius: "25px",
  padding: "13px",
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
