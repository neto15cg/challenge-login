import React, { useEffect } from 'react';
import Login from '../components/Login/Login';
import Head from 'next/head';
import { LoginDataTypes } from '../components/Login/Login.types';
import { useDispatch, useSelector } from 'react-redux';
import { LoginStateProps } from '../store/reducer';
import { clearState, doLogin } from '../store/actions';

const LoginPage = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state: LoginStateProps) => state?.login);
  const loading = useSelector((state: LoginStateProps) => state?.loading);
  const error = useSelector((state: LoginStateProps) => state?.error);

  const handleLogin = async (data: LoginDataTypes) => {
    dispatch(doLogin(data));
  };
  const handleSuccess = () => {
    alert(`Sucesso ao entrar com ${loginData?.username}`);
    dispatch(clearState());
  };

  const handleError = () => {
    alert(`Erro ao entrar`);
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

  return (
    <>
      <Head>
        <title>Challenge Login</title>
        <meta name="Description" content="Challenge Login" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="#" />
        <link rel="amphtml" href="#" />
      </Head>
      <main>
        <Login onLogin={handleLogin} loading={loading} isSuccess={!!loginData} />
      </main>
    </>
  );
};

export default LoginPage;
