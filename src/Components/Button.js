import styled from "styled-components";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

export const ButtonS = styled(Scroll)`
  border-radius: 50px;
  background: #26d7ab;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "var(--secondary)" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: ${({ btnPrimary }) => (btnPrimary ? "#fff" : "var(--secondary)")};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: fit-content;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ btnPrimary }) =>
      btnPrimary
        ? "#fff"
        : "linear-gradient(to right, var(--primary), var(--secondary))"};
    color: #26d7ab;
  }

  border: 1px solid
    ${({ btnPrimary }) => (btnPrimary ? "var(--secondary)" : "#fff")};
`;

export const ButtonL = styled(Link)`
  border-radius: 50px;
  background: #26d7ab;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "var(--secondary)" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: ${({ btnPrimary }) => (btnPrimary ? "#fff" : "var(--secondary)")};
  font-weight: bold;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: fit-content;
  @media screen and (max-width: 768px) {
    width: ${({ course }) => (course ? "100%" : "fit-content")};
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ btnPrimary }) =>
      btnPrimary
        ? "#fff"
        : "linear-gradient(to right, var(--primary), var(--secondary))"};
    color: #26d7ab;
  }
  border: 1px solid
    ${({ btnPrimary }) => (btnPrimary ? "var(--secondary)" : "#fff")};
`;

// ${({ btnPrimary }) =>
//     btnPrimary
//       ? "linear-gradient(to right, var(--primary), var(--secondary))"
//       : "#fff"};
