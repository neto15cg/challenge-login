import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../button/Button';
import Input from '../input/Input';

import { ActionsContainer, ButtonContainer, ForgetPassword, LoginWrapper, WelcomeSubTitle, WelcomeTitle } from './Login.styles';
import { LoginDataTypes } from './Login.types';
import { validateEmail } from '../../utils/validators';
import { useDispatch, useSelector } from 'react-redux';
import { clearState, loadData } from '../../store/actions';
import { LoginStateProps } from '../../store/reducer';

export const LoginForm = () => {
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onChange' });
  const dispatch = useDispatch();
  const loginData = useSelector((state: LoginStateProps) => state?.login);
  const loading = useSelector((state: LoginStateProps) => state?.loading);
  const error = useSelector((state: LoginStateProps) => state?.error);

  const handleLogin = async (data: LoginDataTypes) => {
    dispatch(loadData(data));
  };

  const handleValidateEmail = (value: string) => {
    if (!value) {
      return 'Campo obrigatório';
    }

    if (!validateEmail(value)) {
      return 'Digite um e-email válido';
    }

    return undefined;
  };

  const handleSuccess = () => {
    reset({ username: '', password: '' });
    alert('Sucesso ao entrar');
    dispatch(clearState());
  };

  const handleError = () => {
    alert('Erro ao entrar');
    dispatch(clearState());
  };

  useEffect(() => {
    if (loginData) {
      handleSuccess();
    }
  }, [loginData]);

  useEffect(() => {
    if (error) {
      handleError();
    }
  }, [error]);

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
          ref={register({ required: 'Campo obrigatório', validate: handleValidateEmail })}
        />
        <Input label="SENHA" type="password" name="password" error={errors?.password?.message} ref={register({ required: 'Campo obrigatório' })} />
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
  );
};

export default LoginForm;
