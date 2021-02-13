import React, { forwardRef } from 'react';
import { InputError, InputField, StyledInput, StyledLabel } from './Input.styles';
import { InputProps } from './Input.types';

const Input = (props: InputProps, ref) => {
  const { label, error, id, testId, type, ...otherProps } = props;
  return (
    <InputField>
      <StyledLabel htmlFor={id} error={error}>
        {label}
      </StyledLabel>
      <StyledInput data-testid={testId} id={id} type={type ?? 'text'} ref={ref} error={error} {...otherProps} />
      {error && <InputError>{error}</InputError>}
    </InputField>
  );
};

export default forwardRef(Input);
