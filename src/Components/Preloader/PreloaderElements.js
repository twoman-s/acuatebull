import styled from "styled-components";

export const LoadWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Loader = styled.div`
  width: 150px;
  height: 150px;
  border: 2px solid #26d7ab;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;
export const Logo = styled.div`
  color: #26d7ab;
  font-weight: 900;
`;
