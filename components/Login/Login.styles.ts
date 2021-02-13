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
  height: 98vh;
  width: 100%;
  background-color: #faf5ff;
`;

export const Illustration = styled.div`
  width: 765px;
  height: 100%;
  position: relative;
  background: url('/assets/illustration.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.99;

  ${device.tablet} {
    width: 327px;
  }

  &::after {
    content: '';
    background: linear-gradient(180deg, #130525 0%, rgba(105, 57, 153, 0) 100%);
    transform: rotate(-180deg);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
    transform: rotate(180deg);
  }
`;
export const FormContianer = styled.div`
  ${device.mobile} {
    position: absolute;
  }
`;
