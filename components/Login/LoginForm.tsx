import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button/Button';
import Input from '../input/Input';

import { ActionsContainer, ButtonContainer, ForgetPassword, LoginWrapper, WelcomeSubTitle, WelcomeTitle } from './Login.styles';

export const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm({ mode: 'onChange' });
  const onSubmit = data => console.log(data);

  const handleValidateEmail = (value: string) => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value) {
      return 'Campo obrigatório';
    }

    if (!emailRegex.test(String(value).toLowerCase())) {
      return 'Digite um e-email válido';
    }

    return undefined;
  };

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
          ref={register({ required: 'Campo obrigatório', validate: handleValidateEmail })}
        />
        <Input label="SENHA" type="password" name="password" error={errors?.password?.message} ref={register({ required: 'Campo obrigatório' })} />
        <ActionsContainer>
          <ButtonContainer>
            <Button type="submit">ENTRAR</Button>
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
