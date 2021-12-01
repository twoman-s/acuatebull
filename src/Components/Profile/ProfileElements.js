import styled from "styled-components";

export const ProfileWrapper = styled.div`
  margin-top: 80px;
  padding: 40px 40px;
  display: grid;
  color: "#3f3d56";
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1.5fr 1.5fr;
  grid-template-areas:
    "user address address address"
    "user payment payment payment";
  @media screen and (max-width: 768px) {
    height: auto;
    grid-template-columns: 1fr;
    padding: 20px 20px;
    grid-template-rows: 0.5fr 1fr 1fr;
    grid-template-areas:
      "user"
      "address"
      "payment";
  }
`;
export const UserWrapper = styled.div`
  grid-area: user;
  text-align: center;
  color: "#3f3d56";
`;
export const AddressWrapper = styled.div`
  height: 350px;
  grid-area: address;
  padding: 10px 10px;
  color: "#3f3d56";

  td {
    border-bottom: 1px solid rgba(63, 61, 86, 0.5);
  }
`;
export const PayInfoWrapper = styled.div`
  height: 350px;
  grid-area: payment;
  padding: 10px 10px;
  color: "#3f3d56";

  td {
    border-bottom: 1px solid rgba(63, 61, 86, 0.5);
  }
`;

export const Loader = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
