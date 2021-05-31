import Styled from "styled-components";
import device from "../helpers/device";

export const WorkerAlertWrapper = Styled.div`
  padding: 2rem;

  @media ${device.tablet} {
    padding-top: 4rem;
    width: 400px;
    margin: 0 auto;
  }

  a {
    background-color: var(--primary-200);
    color: var(--primary-500);
    text-decoration: none;
    padding: 1rem;
    display: block;
    border-radius: 8px;
    text-align: center;
    transition: 0.3s background-color;

    &:hover {
      background-color: var(--primary-300);
    }
  }
`;

export const WorkerAlertHeading = Styled.h2`
  padding: 1rem;
  background-color: var(--compliment-300);
  text-align: center;
  text-transform: uppercase;
  color: var(--compliment-500);
  font-weight: 300;
`;

export const WorkerGreeting = Styled.h3`
  padding: 1rem 0;
`;

export const AlertMessage = Styled.p`
  line-height: 1.4;
`;

export const AlertList = Styled.ul`
  margin-bottom: 3rem;
`;