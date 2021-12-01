import styled from "styled-components";
export const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  display: none;
`;

export const PopupWrapper = styled.div`
  width: ${({ form }) => (form ? "450px" : "600px")};
  height: ${({ form }) => (form ? "330px" : "400px")};
  color: #3f3d56;
  background: white;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 20px;
  img {
    width: 350px;
    height: 200px;
    object-fit: contain;
  }
  button {
    padding: 10px;
    border: none;
    border-radius: 25px;
    color: #fff;
    outline: none;
    margin: 15px;
    width: 120px;
    background: #26d7ab;
  }
  h3 {
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    width: ${({ form }) => (form ? "350px" : "400px")};
    height: auto;
  }
`;
