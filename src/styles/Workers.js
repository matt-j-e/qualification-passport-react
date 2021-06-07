import Styled from "styled-components";
import device from "../helpers/device";

export const WorkersWrapper = Styled.section`
  padding: 1rem 0.5rem;

  @media ${device.tablet} {
    padding: 1rem 0;
  }
`;

export const Heading = Styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 2rem;

  @media ${device.tablet} {
    font-size: 3rem;
  }
`;

export const JobSearchWrapper = Styled.div`

  @media ${device.tablet} {
    padding: 1rem;
    background-color: rgba(0,0,0,0.15);
    border: 1px solid rgba(0,0,0,0.25);
  }
`;

export const JobSearchForm = Styled.form`
  text-align: center;

  h2 {
    display: none;

    @media ${device.tablet} {
      display: block;
      padding-bottom: 0.5rem;
      font-size: 1rem;
      font-weight: 300;
      text-transform: uppercase;
      color: var(--gray-100);
    }
  }

  input {
    font-size: 0.9rem;
    border: none;

    &:focus {
      outline: 1px solid var(--compliment-200);
    }

    @media ${device.tablet} {
      font-size: 0.9rem;
      height: 2rem;
    }
  }

  input[type=text] {
    width: 55%;
    border: 1px solid var(--gray-400);

    @media ${device.tablet} {
      width: 40%;
    }
  }

  input[type=submit],
  input[type=button] {
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.4rem;
    cursor: pointer;

    @media ${device.tablet} {
      margin: 0 1rem;
      font-size: 0.9rem;
    }
  }

  input[type=submit] {
    background-color: var(--compliment-300);
    color: var(--compliment-500);
    margin-right: 0.2rem;
  }

  input[type=button] {
    background-color: var(--primary-200);
    color: var(--primary-500);
  }
`;

export const WorkersList = Styled.ul`
  list-style-type: none;
  padding: 0;

  @media ${device.tablet} {
    margin: 0 auto;
    width: 700px;
  }

`;