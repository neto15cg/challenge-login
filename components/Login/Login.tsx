import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button/Button';
import Input from '../input/Input';

import { ActionsContainer, ButtonContainer, ForgetPassword, LoginWrapper, WelcomeSubTitle, WelcomeTitle } from './Login.styles';
import { validateEmail } from '../../utils/validators';
import LoginContainer from './LoginContainer';
import { LoginDataTypes, LoginProps } from './Login.types';

export const Login = ({ onLogin, loading, isSuccess }: LoginProps) => {
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onChange' });

  const handleValidateEmail = (value: string) => {
    if (!value) {
      return 'Campo obrigatório';
    }

    if (!validateEmail(value)) {
      return 'Digite um e-email válido';
    }

    return undefined;
  };

  useEffect(() => {
    if (isSuccess) {
      reset({ username: '', password: '' });
    }
  }, [isSuccess]);

  const onSubmit = (data: LoginDataTypes) => onLogin(data);

  return (
    <LoginContainer>
      <LoginWrapper>
        <WelcomeTitle>Olá, seja bem-vindo!</WelcomeTitle>
        <WelcomeSubTitle>Para acessar a plataforma, faça seu login.</WelcomeSubTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="E-MAIL"
            error={errors?.username?.message}
            type="text"
            name="username"
            id="username"
            ref={register({ required: 'Campo obrigatório', validate: handleValidateEmail })}
          />
          <Input
            label="SENHA"
            type="password"
            name="password"
            error={errors?.password?.message}
            id="password"
            ref={register({ required: 'Campo obrigatório' })}
          />
          <ActionsContainer>
            <ButtonContainer>
              <Button loading={loading} type="submit">
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
    </LoginContainer>
  );
};

export default Login;
