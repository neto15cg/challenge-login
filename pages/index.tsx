import React from 'react';
import Button from '../components/button/Button';
import Input from '../components/input/Input';

const Login = () => (
  <div>
    <Button type="button" loading={false} onClick={() => console.log('CLICADO')}>
      Botão
    </Button>
    <br />
    <br />
    <br />
    <br />
    <Input type="email" name="username" label="EMAIL" error="Email inválido" />
  </div>
);

export default Login;
