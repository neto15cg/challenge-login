import styled, { css } from 'styled-components';

export const InputField = styled.div`
  max-width: 100%;
  margin-top: 16px;
`;

export const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-family: Montserrat;
  font-size: 10px;
  color: #383e71;
  padding-left: 12px;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 53px 0 17px;
  border: 1px solid #989fdb;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 10px;
  line-height: 48px;
  font-style: normal;
  font-weight: normal;
  font-family: Montserrat;
  background-color: transparent;
  color: #383e71;

  &:focus {
    outline: none;
    border: 1px solid #989fdb7a;
    box-shadow: 0px 0px 7px #989fdb7a;
    z-index: 2;
  }

  ${props =>
    props.error &&
    css`
      border: 1px solid #ff377f;
      box-sizing: border-box;
      border-radius: 8px;
    `}
`;

export const InputError = styled.span`
  display: flex;
  align-items: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  color: #ff377f;
  padding-left: 12px;
  margin-top: 8px;
`;

export const ErrorIconContainer = styled.div`
  position: absolute;
  top: 18px;
  right: 20px;
`;

export const InputContainer = styled.div`
  position: relative;
`;
