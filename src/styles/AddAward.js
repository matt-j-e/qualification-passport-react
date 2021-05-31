import Styled from "styled-components";
import device from "../helpers/device";

export const AddAwardWrapper = Styled.section`
  margin-top: 2rem;
  width: 380px;
`;

export const AddAwardHeading = Styled.h3`
  background-color: var(--primary-300);
  color: var(--primary-400);
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem;
`;

export const Form = Styled.form`

  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--primary-400);
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  input, select {
    font-size: 0.9rem;
  }

  button {
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--compliment-500);
    background-color: var(--compliment-300);
    padding: 1rem;
    cursor: pointer;
  }
`;
