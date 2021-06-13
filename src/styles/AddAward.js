import Styled from "styled-components";
import device from "../helpers/device";

export const AddAwardWrapper = Styled.section`
  margin-top: 2rem;
  width: 100%;

  @media ${device.tablet} {
    width: 50%;
    margin-top: 4rem;
  }

  @media ${device.laptopM} {
    width: 35%
  }
`;

export const AddAwardHeading = Styled.h3`
  // background-color: var(--primary-300);
  border: 1px solid var(--primary-100);
  color: var(--primary-100);
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
    background-color: var(--gray-400);
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  input, select {
    font-size: 0.9rem;
  }

  select {
    width: 100%;
  }

  button {
    text-transform: uppercase;
    font-size: 1rem;
    color: var(--compliment-500);
    background-color: var(--compliment-300);
    padding: 1rem;
    cursor: pointer;
    width: 100%;

    @media ${device.tablet} {
      width: auto;
    }
  }
`;
