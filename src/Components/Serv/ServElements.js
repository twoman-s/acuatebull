import styled from "styled-components";
// import bg from "./../InfoSection/images/bg.png";

export const ServWrapper = styled.div`
  color: #3f3d56;
  padding: 0 120px;
  margin-top: 30px;
  h1 {
    text-align: center;
    font-size: 48px;
    font-weight: 900;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    padding: 16px;
    h1 {
      font-size: 2rem;
    }
  }
`;
export const BoxContainer = styled.div`
  display: flex;
  padding: 16px;
  grid-gap: 16px;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
export const Box = styled.div`
  /* background: #26d7ab; */
  max-height: 300px;
  height: 200px;
  text-align: center;
  width: 350px;
  padding: 15px;
  border-radius: 25px;
  border: 1px solid #26d7ab;
  margin-bottom: 15px;
  transition: 0.5s;
  /* color: "#26d7ab"; */
  h3 {
    margin-top: 20px;
    font-size: 23px;
    text-align: center;
  }
  /* :hover {
    background: #26d7ab;
    color: #fff !important;
  } */
`;
