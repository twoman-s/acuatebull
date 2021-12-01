import styled from "styled-components";

export const CourseWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 80px;
  color: #3f3d56;
  @media screen and (max-width: 768px) {
    h2 {
      text-align: center;
      margin: 0 !important;
    }
  }
`;
export const CourseCard = styled.div`
  @media screen and (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
`;
export const CourseImg = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: center;
`;

export const CourseContent = styled.div`
  padding: 1rem 1rem;

  @media screen and (max-width: 768px) {
    text-align: center;
    h2 {
      text-align: center;
      margin: 0px !important;
    }
    a {
    }
  }
`;
export const ChHead = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  position: relative;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
export const ProductPrice = styled.div`
  margin: 1rem 0;
`;
export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 900;
  color: #26d7ab;
  span {
    font-size: 1.5rem;
    color: red;
    text-decoration: line-through;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const ProductDetails = styled.div`
  h2 {
    text-transform: capitalize;
    color: #53b8d7;
    padding-bottom: 0.6rem;
  }
  p {
    font-size: 1rem;
    padding: 0.3rem;
  }
  @media screen and (max-width: 768px) {
    text-align: center;
    P {
      text-align: center;
    }
    button {
      font-size: 14px;
      width: 100px !important;
    }
  }
`;
export const PList = styled.ul`
  margin: 1rem 0;
  font-size: 1rem;

  p {
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    text-align: start !important;
    P {
      text-align: center;
    }
  }
`;
export const LItem = styled.li`
  padding: 0.5rem;
  list-style: ${({ listStyle }) => (listStyle ? "" : "none")};
`;

export const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    text-align: center;
  }
`;
