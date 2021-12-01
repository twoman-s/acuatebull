import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  /* margin-top: 80px; */
  color: #3f3d56;
`;
export const Form = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);
`;
export const Inputs = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin: 0px 0 20px 0;
  background-color: #ddd;
  height: 40px;
  padding: 10px;
  outline: none;
  /* box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1); */
`;
export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  border: none;
  border-radius: 5px;
  margin: 0px 0 20px 0;
  background-color: #ddd;
  min-height: 100px;
  resize: none;
  padding: 10px;
  outline: none;
`;
export const FieldSet = styled.fieldset``;
export const Error = styled.div`
  color: red;
  font-size: 15px;
`;
export const Submit = styled.input.attrs({
  type: "submit",
})`
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
    color: ${({ btnPrimary }) => (btnPrimary ? "var(--secondary)" : "#fff")};
  }
  border: 1px solid
    ${({ btnPrimary }) => (btnPrimary ? "var(--secondary)" : "#fff")};
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
