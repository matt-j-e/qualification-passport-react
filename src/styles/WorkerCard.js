import Styled from "styled-components";
import device from "../helpers/device";

export const WorkerListItem = Styled.li`
  padding: 0.7rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    padding-left: 1rem;
    height: 3rem;
  }

  &:nth-child(odd) {
    background-color: var(--primary-400);
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: var(--compliment-500);
    background-color: var(--compliment-300);
    padding: 1rem;

    @media ${device.tablet} {
      font-size: 1rem;
    }
  }
`;

export const WorkerName = Styled.span`
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 700;
  margin-right: 0.5rem;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

export const WorkerJob = Styled.span`
  font-size: 0.9rem;
  margin-right: 0.5rem;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;