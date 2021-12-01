import styled from "styled-components";

export const NavWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  /* background: linear-gradient(
    to right,
    rgba(30, 126, 204, 0.6),
    rgba(83, 184, 215, 0.6)
  ); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 80px;
  z-index: 10;
  /* border-radius: 20px; */
  border-bottom: 1px solid #f2fefc;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  /* border: 1px solid black; */
  @media screen and (max-width: 768px) {
    padding: 10px 25px;
  }
`;
export const NavLogo = styled.div`
  cursor: pointer;
  width: 80%;

  @media screen and (max-width: 768px) {
    img {
      width: 55% !important;
      height: auto;
    }
  }
`;
export const NavLinks = styled.div`
  display: flex;
`;
export const LinkB = styled.h1`
  font-size: 15px;
  margin: 10px 10px;
  padding: 13px;
  background: linear-gradient(to right, var(--primary), var(--secondary));
  border: 1px solid var(--secondary);
  cursor: pointer;
  border-radius: 25px;
  color: #fff;
  transition: 0.5s;
  border: 1px solid #fff;

  &:hover {
    border: 1px solid var(--primary);
    background: white;
    color: var(--primary);
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const Link = styled.h1`
  color: var(--primary);
  font-size: 15px;
  margin: 10px 10px;
  padding: 13px;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 20px;
  @media screen and (max-width: 768px) {
    margin: 5px 5px;
  }
  &:hover {
    background: white;
    color: var(--primary);
    border: 1px solid var(--secondary);
  }
`;
