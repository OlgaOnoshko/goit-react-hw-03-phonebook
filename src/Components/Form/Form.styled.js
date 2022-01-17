import styled from "@emotion/styled";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 20px;
  border: 2px solid darksalmon;
  border-radius: 4px;
  box-shadow: 0px 5px 8px 2px rgba(34, 60, 80, 0.2) inset;
`;
export const Button = styled.button`
  width: 100px;
  &:hover {
    cursor: pointer;
    background-color: darksalmon;
  }
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;
export const Input = styled.input`
  margin-bottom: 10px;
`;
