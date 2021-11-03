import styled from "styled-components";

export const CourseWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  margin-top: 80px;
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
  padding: 2rem 1rem;
`;
export const ChHead = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  position: relative;
`;
export const ProductPrice = styled.div`
  margin: 1rem 0;
`;
export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
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
`;
export const PList = styled.ul`
  margin: 1rem 0;
  font-size: 1rem;
  p {
    font-weight: bold;
  }
`;
export const LItem = styled.li`
  padding: 0.5rem;
  list-style: none;
`;
