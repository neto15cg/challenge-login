import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import Button from '../button/Button';
import Input from '../input/Input';

import { ActionsContainer, ButtonContainer, ForgetPassword, LoginWrapper, WelcomeSubTitle, WelcomeTitle } from './Login.styles';
import { LoginDataTypes } from './Login.types';
import { validateEmail } from '../../utils/validators';

export const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onChange' });

  const handleLogin = async (data: LoginDataTypes) => {
    try {
      setIsLoading(true);
      await Axios.post('https://60283795dd4afd001754b197.mockapi.io/login', data);
      setIsLoading(false);
      reset({ username: '', password: '' });
      alert('Sucesso ao entrar');
    } catch {
      setIsLoading(false);
      alert('Desculpe, não foi possível entrar');
    }
  };

  const onSubmit = data => handleLogin(data);

  return (
    <LoginWrapper>
      <WelcomeTitle>Olá, seja bem-vindo!</WelcomeTitle>
      <WelcomeSubTitle>Para acessar a plataforma, faça seu login.</WelcomeSubTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="E-MAIL"
          error={errors?.username?.message}
          type="text"
          name="username"
          ref={register({ required: 'Campo obrigatório', validate: validateEmail })}
        />
        <Input label="SENHA" type="password" name="password" error={errors?.password?.message} ref={register({ required: 'Campo obrigatório' })} />
        <ActionsContainer>
          <ButtonContainer>
            <Button loading={isLoading} type="submit">
              ENTRAR
            </Button>
          </ButtonContainer>
          <ForgetPassword>
            <span>Esqueceu seu login ou senha?</span>
            <span>
              Clique <a href="#">aqui</a>
            </span>
          </ForgetPassword>
        </ActionsContainer>
      </form>
    </LoginWrapper>
  );
};

export default LoginForm;
