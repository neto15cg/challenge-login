import React, { forwardRef } from 'react';
import SvgIcon from '../svgIcon/SvgIcon';
import { ErrorIconContainer, InputContainer, InputError, InputField, StyledInput, StyledLabel } from './Input.styles';
import { InputProps } from './Input.types';

const Input = (props: InputProps, ref) => {
  const { label, error, id, testId, type, ...otherProps } = props;
  return (
    <InputField>
      <StyledLabel htmlFor={id} error={error}>
        {label}
      </StyledLabel>
      <InputContainer>
        <StyledInput data-testid={testId} id={id} type={type ?? 'text'} ref={ref} error={error} {...otherProps} />
        {error && (
          <ErrorIconContainer>
            <SvgIcon src="/assets/close-icon.svg" />
          </ErrorIconContainer>
        )}
      </InputContainer>
      {error && <InputError>{error}</InputError>}
    </InputField>
  );
};

export default forwardRef(Input);
