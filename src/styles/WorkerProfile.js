import Styled from "styled-components";
import device from "../helpers/device";

export const WorkerProfileWrapper = Styled.section`
  padding: 1rem 0.5rem;
  color: var(--gray-100);
`;

export const Heading = Styled.h1`
  margin-bottom: 0.5rem;
  font-weight: 100;
  font-size: 3rem;

  @media (max-width: 760px) {
    font-weight: 300;
    font-size: 2rem;
    text-align: center;
  }
`;

export const Email = Styled.p`
  margin-bottom: 1rem;
  color: var(--gray-300);

  @media (max-width: 760px) {
    text-align: center;
  }
`;

export const JobTitle = Styled.h3`
  text-transform: uppercase;
  margin-bottom: 1.5rem;

  @media (max-width: 760px) {
    text-align: center;
  }
`;

export const QualificationsHeader = Styled.h3`
  background-color: var(--gray-100);
  color: var(--gray-500);
  text-transform: uppercase;
  text-align: center;
  padding: 0.5rem;
`;

export const Table = Styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 760px) {
    display: block;

    thead, tbody, th, td, tr {
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid var(--primary-300);
      border-bottom: none;

      &:last-of-type {
        border-bottom: 1px solid var(--primary-300);
      }
    }

    tbody td {
      border: none;
      padding-left: 40%;
      padding-top: 0.3rem;
      padding-bottom: 0.3rem;
      position: relative;

      &:before {
        position: absolute;
        font-weight: 700;
        top: 0.5rem;
        left: 0.5rem;
        width: 35%;
        padding-right: 0.8rem;
        white-space: nowrap;
      }

      &:nth-of-type(1):before { content: "Type"; }
      &:nth-of-type(2):before { content: "Awarding body"; }
      &:nth-of-type(3):before { content: "Date awarded"; }
      &:nth-of-type(4):before { content: "Expiry date"; }
      &:nth-of-type(5):before { content: "Delete"; }

      &.delete {
        text-align: left;
      }
    }
  }

  th {
    text-align: left;
    background-color: var(--gray-200);
    color: var(--gray-500);
    font-weight: 400;
  }

  th, td {
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid var(--primary-300);
  }

  td.delete {
    text-align: center;
  }

  td.expiring {
    background-color: var(--compliment-300);
    color: var(--compliment-500);
  }

  td.expired {
    background-color: var(--compliment-100);
    color: var(--compliment-500);
  }

  button {
    background-color: red;
    color: var(--gray-500);
    cursor: pointer;
  }

  tbody tr:nth-of-type(odd) {
    background: var(--gray-500);
  }
`;