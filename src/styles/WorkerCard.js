import Styled from "styled-components";
import device from "../helpers/device";

export const WorkerListItem = Styled.li`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    padding-left: 1rem;
    height: 2.5rem;
  }

  &:nth-child(odd) {
    background-color: var(--gray-500);
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.8rem;
    color: var(--compliment-500);
    background-color: var(--compliment-300);
    padding: 0.8rem;

    @media ${device.tablet} {
      font-size: 0.9rem;
    }
  }
`;

export const WorkerName = Styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  margin-right: 0.5rem;

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
`;

export const WorkerJob = Styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-right: 0.5rem;

  @media ${device.tablet} {
    font-size: 0.9remrem;
  }
`;