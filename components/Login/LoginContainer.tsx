import React from 'react';
import Image from 'next/image';

import { FormContianer, Illustration, LoginContent } from './Login.styles';

const LoginContainer = ({ children }) => {
  return (
    <LoginContent>
      <Illustration>
        <div>{/* <Image src="/assets/illustration.png" alt="me" width="64" height="64" /> */}</div>
      </Illustration>
      <FormContianer>{children}</FormContianer>
    </LoginContent>
  );
};

export default LoginContainer;
