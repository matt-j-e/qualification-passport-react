import Styled from "styled-components";
import device from "../helpers/device";

export const ColoursKeyWrapper = Styled.section`
  display: none;
  font-size: 70%;

  @media ${device.tablet} {
    width: 20%;
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: var(--gray-300);
  }

  @media ${device.laptopM} {
    width: 15%;
  }
`;

export const KeyElement = Styled.span`
  text-align: center;
  padding: 0.3rem 0;
  // border: 1px solid var(--gray-300);

  &.title {
    font-weight: 700;
    font-style: italic;
  }

  &.expiring {
    background-color: var(--compliment-300);
    color: var(--compliment-500);
  }

  &.expired {
    background-color: var(--compliment-100);
    color: var(--compliment-500);
  }
`;
