import React from 'react';

import { FormContianer, Illustration, LoginContent } from './Login.styles';

const LoginContainer = ({ children }) => {
  return (
    <LoginContent>
      <Illustration />
      <FormContianer>{children}</FormContianer>
    </LoginContent>
  );
};

export default LoginContainer;
