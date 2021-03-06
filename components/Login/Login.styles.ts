import { math } from 'polished';
import styled from 'styled-components';

export const breakpoints = ['768px', '1024px', '1200px', '1440px'];

export const device = {
  mobile: `@media screen and (max-width: ${math(`${breakpoints[0]} - 1px`)})`,
  tablet: `@media screen and (min-width: ${breakpoints[0]}) and (max-width: ${breakpoints[1]})`,
  desktop: `@media screen and (min-width: ${math(`${breakpoints[1]} + 1px`)})`,
};

export const LoginContent = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: #faf5ff;
`;

export const Illustration = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: url('/assets/illustration.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.99;
  transition: width 250ms ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    transform: rotate(180deg);
    z-index: -1;
  }

  ${device.desktop} {
    width: 100%;
    max-width: 765px;
  }

  ${device.tablet} {
    width: 365px;
  }
`;

export const FormContianer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  ${device.desktop} {
    justify-content: flex-start;
  }

  ${device.mobile} {
    height: 100%;
    position: absolute;
  }
`;

export const LoginWrapper = styled.div`
  width: 256px;

  ${device.desktop} {
    display: block;
    margin-left: 19%;
  }

  ${device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 24px 56px 24px;
    justify-content: center;
    background: #faf5ff;
    border-radius: 8px;
  }

  form {
    position: relative;
    width: 100%;
  }
`;

export const WelcomeTitle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 48px;
  color: #383e71;
  margin: 0;

  ${device.mobile} {
    width: 140px;
    text-align: center;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const WelcomeSubTitle = styled.h2`
  margin: 16px 0 34px 0;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #989fdb;

  ${device.mobile} {
    margin-bottom: 0;
    font-size: 12px;
    line-height: 20px;
  }
`;

export const ActionsContainer = styled.div`
  ${device.mobile} {
    position: absolute;
    bottom: -150px;
    width: 100%;
    margin: 0;
  }
`;

export const ButtonContainer = styled.div`
  margin: 24px 0 32px 0;
`;

export const ForgetPassword = styled.div`
  text-align: center;

  span {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #989fdb;

    ${device.mobile} {
      color: #ffffff;
    }
  }

  a {
    color: #9d25b0;
    ${device.mobile} {
      color: #ffffff;
    }
  }
`;
