import styled from "styled-components";

export const ContactWrapper = styled.div`
  width: 100%;
  color: #3f3d56;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: -50px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: -80px;
  }
`;
export const ContactContent = styled.div`
  height: 400px;
  /* background: lightcyan; */
  padding: 50px 0px 50px 80px;
  h1 {
    font-size: 48px;
    font-weight: 900;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    padding: 0 50px;
    height: 350px;
  }
`;
export const ContactImage = styled.div`
  height: 400px;
  /* background: pink; */
  margin-top: -30px;
  @media screen and (max-width: 768px) {
    height: 350px;
    margin-top: -150px;
  }
`;
export const ContactDetails = styled.div`
  height: 200px;
  background: white;
  border-radius: 20px;
  text-align: center;
  padding: 10px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.3);
  button {
    outline: none;
    border: none;
    background: #26d7ab;
    padding: 15px 20px;
    text-align: center;
    color: #fff;
    border-radius: 25px;
    font-weight: bold;
    transition: 0.5s;
    border: 1px solid #26d7ab;
  }
  button:hover {
    background: #fff;
    color: #26d7ab;
  }
  h3 {
    font-weight: bold;
    color: #3f3d56;
    margin: 6px;
  }
  a {
    font-weight: bold;
    color: #3f3d56;
    margin: 6px;
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    a {
      font-size: 18px;
    }
  }
`;
