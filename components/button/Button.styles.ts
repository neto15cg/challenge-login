import styled, { keyframes } from 'styled-components';
import { darken, lighten } from 'polished';

const BUTTON_COLORS = {
  darkPurple: '#9d25b0',
  darkBlue: '#383e71',
  lightPurple: '#cf99db',
};

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  width: 100%;
  background: linear-gradient(267.79deg, ${BUTTON_COLORS.darkBlue} 0%, ${BUTTON_COLORS.darkPurple} 99.18%);
  background-position: center;
  color: #ffffff;
  font-weight: 600;
  line-height: 20px;
  border: none;
  outline: none;
  border-radius: 8px;
  box-shadow: 0px 10px 25px ${BUTTON_COLORS.lightPurple};
  transition: background 250ms ease-out;
  cursor: pointer;

  &:hover {
    background: ${darken(0.005, BUTTON_COLORS.darkPurple)} radial-gradient(circle, transparent 1%, ${darken(0.005, BUTTON_COLORS.darkPurple)} 1%) center/15000%;
  }

  &:active {
    background-color: ${lighten(0.05, BUTTON_COLORS.darkBlue)};
    background-size: 100%;
    transition: background 0s;
  }

  &&:disabled {
    background: #b5b7ba;
    border-color: #b5b7ba;
    cursor: initial;
    box-shadow: none;

    span {
      color: #556070;
    }
  }
`;

const spinnerBorder = () => keyframes`
    to {
      transform: rotate(360deg);
    }
`;

export const ButtonContainerLoading = styled.div`
  position: absolute;
`;

export const BasicLoading = styled.div`
  border: 4px solid #fff;
  animation: ${spinnerBorder} 0.75s linear infinite;
  border-right-color: transparent;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
