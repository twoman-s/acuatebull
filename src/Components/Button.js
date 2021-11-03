import styled from "styled-components";
import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";

export const ButtonS = styled(Scroll)`
  border-radius: 50px;
  background: ${({ btnPrimary }) =>
    btnPrimary
      ? "linear-gradient(to right, var(--primary), var(--secondary))"
      : "#fff"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "var(--secondary)" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: ${({ btnPrimary }) => (btnPrimary ? "#fff" : "var(--secondary)")};

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
  }
  border: 1px solid
    ${({ btnPrimary }) => (btnPrimary ? "var(--secondary)" : "#fff")};
`;

export const ButtonL = styled(Link)`
  border-radius: 50px;
  background: ${({ btnPrimary }) =>
    btnPrimary
      ? "linear-gradient(to right, var(--primary), var(--secondary))"
      : "#fff"};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "var(--secondary)" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: ${({ btnPrimary }) => (btnPrimary ? "#fff" : "var(--secondary)")};

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
  }
  border: 1px solid
    ${({ btnPrimary }) => (btnPrimary ? "var(--secondary)" : "#fff")};
`;
