import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #303036;
  color: #d3d3d3;
  height: 400px;
  position: relative;
  padding-top: 15px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const FooterContent = styled.div`
  display: flex;
  height: 350px;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
  h2 {
    color: white;
    font-weight: bold;
    border-bottom: 1px solid white;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 15px;
  }
`;
export const FooterContact = styled.div`
  span {
    display: block;
    font-size: 1em;
    margin-bottom: 8px;
  }
`;
export const FooterStart = styled.div`
  flex: 1;

  padding: 25px;
`;
export const FooterMid = styled.div`
  flex: 1;
  padding: 25px;
  ul {
    padding-left: 30px;
  }
  li {
    display: block;
    margin-bottom: 10px;
    font-size: 1.1em;
    cursor: pointer;
    transition: all 0.3s;
    font-weight: bold;
  }
  li:hover {
    transition: all 0.3s;
    color: white;
    margin-left: 15px;
  }
`;
export const FooterEnd = styled.div`
  flex: 1;
  padding: 25px;
`;
export const FooterBottom = styled.div`
  background: #343a40;
  color: #686868;
  height: 50px;
  width: 100%;
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
  padding-top: 15px;
`;
