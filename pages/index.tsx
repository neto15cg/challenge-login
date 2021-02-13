import React from 'react';
import Login from '../components/Login/Login';
import Head from 'next/head';

const LoginPage = () => (
  <>
    <Head>
      <title>Challenge Login</title>
      <meta name="Description" content="Challenge Login" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="#" />
      <link rel="amphtml" href="#" />
    </Head>
    <main>
      <Login />
    </main>
  </>
);

export default LoginPage;
