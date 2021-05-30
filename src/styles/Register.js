import Styled from "styled-components";
import device from "../helpers/device";

export const PageWrapper = Styled.div`
  height: 100vh;
  background-color: white;
  @media ${device.laptopM} {
    display: flex;
  }
`;

export const ImageWrapper = Styled.section`
  display: none;
  @media ${device.laptopM} {
    display: block;
    width: 59.17%;
    height: 100%;
    background-image: url("./bg.png");
    background-position: center;
    background-repeat: no-repeat;
  }
`;

export const ContentWrapper = Styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: var(--primary-200);
  color: var(--gray-500);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media ${device.laptopM} {
    height: 100%;
    width: 26.83%;
    padding: 0 7%;
  }
`;

export const BrandingWrapper = Styled.article`
  font-family: 'Ubuntu', sans-serif;
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;

  @media ${device.laptopM} {
    font-size: 2.1rem;
    text-align: left;
  }

  .register__logo {
    color: var(--primary-500);
    letter-spacing: -0.25rem;
    padding-right: 0.3rem;
    position: relative;
    top: -5px;

    @media ${device.laptopM} {
      letter-spacing: -0.25rem;
      padding-right: 0.5rem;
      position: relative;
      top: -5px;
    }
  }

  .register__name {
    color: var(--primary-400);
    text-transform: uppercase;
    font-weight: 500;

    @media ${device.laptopM} {
      // font-size: 2.8rem;
    }
  }

  .register__strapline {
    font-family: "Roboto", sans-serif;
    color: var(--primary-400);
    font-size: 0.8rem;
    padding: 0.5rem 0;

    @media ${device.laptopM} {
      font-size: 1rem;
    }
  }
`;

export const FormWrapper = Styled.article`
  padding: 0 8%;

  @media ${device.laptopM} {
    padding: 0;
  }

  h2 {
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 1rem 0;

    @media ${device.tablet} {
      padding-bottom: 2rem;
    }

    @media ${device.laptopM} {
      text-align: left;
    }
  }
`;

export const Form = Styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media ${device.tablet} {
    // align-items: flex-start;
  }

  div {
    width: 100%;
    // margin-bottom: 1rem;

    @media ${device.tablet} {
      width: 60%;
    }

    @media ${device.laptopM} {
      width: 100%;
    }
  }

  label {
    display: none;

    @media ${device.tablet} {
      color: var(--primary-400);
      width: 60%;
      text-align: left;
      display: block;
    }

    @media ${device.laptopM} {
      width: 100%;
    }
  }
  
  input {
    width: 95%;
    height: 1.8rem;
    border: 0;
    margin-bottom: 1rem;
    padding-left: 5%;
    font-size: 1rem;
    background-color: var(--gray-500);
    color: var(--gray-200);

    @media${device.tablet} {
      height: 2.5rem;
    }

    @media${device.laptopM} {
      height: 1.8rem;
      margin-bottom: 0.6rem;
    }

    @media${device.desktop} {
      margin-bottom: 1.5rem;
      height: 2.5rem;
    }
  }

  input[type=submit] {
    width: 100%;
    height: 3rem;
    background-color: var(--compliment-300);
    color: rgba(255,255,255,0.95);
    font-size: 1.1rem;
    font-weight: 700;

    @media ${device.tablet} {
      margin-top: 1rem;
    }
  }

  input::-moz-placeholder {
    opacity: 0.55;

    @media ${device.tablet} {
      opacity: 0;
    }
  }
`;

export const SignInLinkWrapper = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;

  @media ${device.tablet} {
    width: 60%;
  }

  a {
    display: block;
    background-color: var(--primary-400);
    color: var(--primary-200);
    padding: 0.6rem 1.5rem;
    text-decoration: none;
    font-size: 1.1rem;
  }
`;

export const GuestLinkWrapper = Styled.div`
  width: 100%;
  // text-align: center;
  padding: 2rem 0;

  @media ${device.tablet} {
    width: 60%;
  }

  a {
    color: inherit;
  }
`;