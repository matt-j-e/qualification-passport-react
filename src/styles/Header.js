import Styled from "styled-components";
import device from "../helpers/device";

export const HeaderWrapper = Styled.header`
  background-color: var(--primary-200);
  padding: 1rem;

  @media ${device.laptopM} {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  article { // removing Branding declaration
    margin-top: 0;
  }
`;

export const NavWrapper = Styled.nav`
  
`;

export const NavList = Styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: center;

  @media ${device.tablet} {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${device.laptopM} {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavListItem = Styled.li`
  text-transform: uppercase;
  padding: 0.5rem;

  a {
    padding: 0.5rem;
    text-decoration: none;
    color: var(--gray-400);
  }
`;

export const NavListSignOut = Styled.li`
  color: var(--primary-500);
  padding: 1rem 0.8rem 0 0.8rem;

  span {
    margin-right: 1rem;
    font-weight: 500;
    color: var(--gray-500);
  }

  @media ${device.laptopM} {
    padding: 0 0 0 1rem;
  }
`;

export const NavListSignOutButton = Styled.button`
  background-color: var(--primary-400);
  padding: 0.3rem 0.6rem;
  font-size: 1rem;
  cursor: pointer;
  border: none;
`;