import Styled from "styled-components";
import device from "../helpers/device";

export const WorkerProfileWrapper = Styled.section`
  padding: 1rem 0.5rem;
  color: var(--gray-100);
`;

export const Heading = Styled.h1`
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 3rem;
`;

export const Email = Styled.p`
  margin-bottom: 1rem;
  color: var(--gray-300);
`;

export const JobTitle = Styled.h3`
  text-transform: uppercase;
  margin-bottom: 1.5rem;
`;

export const QualificationsHeader = Styled.h3`
  background-color: var(--primary-200);
  color: var(--primary-400);
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem;
`;

export const Table = Styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    text-align: left;
    background-color: var(--gray-400);
    color: var(--gray-100);
  }

  th, td {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid var(--primary-300);
  }

  td.delete {
    text-align: center;
  }

  button {
    background-color: red;
    color: var(--gray-500);
    cursor: pointer;
  }

  tbody tr:nth-of-type(odd) {
    background: var(--primary-400);
  }
`;