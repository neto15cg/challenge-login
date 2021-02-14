import React from 'react';
import { buildSpy, ensureRender, noop, userEvent } from '../../../utils/testHelper';
import { render, screen, waitFor } from '@testing-library/react';

import Login from '../Login';

describe('Login', () => {
  it('should render the Login', async () => {
    render(<Login onLogin={noop} loading={false} isSuccess={false} />);
    await ensureRender();

    expect(screen.getByText(/Olá, seja bem-vindo!/i)).toBeInTheDocument();
    expect(screen.getByText(/Para acessar a plataforma, faça seu login./i)).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: /E-MAIL/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ENTRAR/i })).toBeInTheDocument();
    expect(screen.getByText(/Esqueceu seu login ou senha?/i)).toBeInTheDocument();
    expect(screen.getByText(/Clique/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /aqui/i })).toBeInTheDocument();
  });

  it('should be validate email and password', async () => {
    render(<Login onLogin={noop} loading={false} isSuccess={false} />);
    await ensureRender();

    const input = screen.getByRole('textbox', { name: /E-MAIL/i });
    userEvent.type(input, 'email');
    userEvent.click(screen.getByRole('button', { name: /ENTRAR/i }));
    await ensureRender();
    expect(screen.getByText(/Digite um e-email válido/i)).toBeInTheDocument();
    expect(screen.getByText(/Campo obrigatório/i)).toBeInTheDocument();
  });

  it('should be called onLogin when fill inputs and click in ENTRAR', async () => {
    const spy = buildSpy();
    render(<Login onLogin={spy} loading={false} isSuccess={false} />);
    await ensureRender();

    const emailInput = screen.getByRole('textbox', { name: /E-MAIL/i });
    const passwordInput = screen.getByLabelText(/Senha/i);
    userEvent.type(emailInput, 'email@dominio.com');
    userEvent.type(passwordInput, '123456');
    expect(emailInput).toHaveValue('email@dominio.com');
    expect(passwordInput).toHaveValue('123456');
    userEvent.click(screen.getByRole('button', { name: /ENTRAR/i }));
    await waitFor(() => expect(spy).toBeCalledWith({ password: '123456', username: 'email@dominio.com' }));
  });

  it('should be not called onLogin when is loading', async () => {
    const spy = buildSpy();
    render(<Login onLogin={spy} loading={true} isSuccess={false} />);
    await ensureRender();

    const emailInput = screen.getByRole('textbox', { name: /E-MAIL/i });
    const passwordInput = screen.getByLabelText(/Senha/i);
    userEvent.type(emailInput, 'email@dominio.com');
    userEvent.type(passwordInput, '123456');
    userEvent.click(screen.getByRole('button', { name: /ENTRAR/i }));
    await waitFor(() => expect(spy).not.toBeCalled());
  });

  it('should be called onLogin when type incorrect email and type correct email', async () => {
    const spy = buildSpy();
    render(<Login onLogin={spy} loading={false} isSuccess={false} />);
    await ensureRender();

    const emailInput = screen.getByRole('textbox', { name: /E-MAIL/i });
    const passwordInput = screen.getByLabelText(/Senha/i);
    userEvent.type(emailInput, 'email');
    userEvent.click(screen.getByRole('button', { name: /ENTRAR/i }));
    await ensureRender();
    expect(screen.getByText(/Digite um e-email válido/i)).toBeInTheDocument();
    expect(screen.getByText(/Campo obrigatório/i)).toBeInTheDocument();
    await waitFor(() => expect(spy).not.toBeCalled());

    userEvent.clear(emailInput);
    userEvent.type(emailInput, 'email@dominio.com');
    userEvent.type(passwordInput, '123456');
    expect(emailInput).toHaveValue('email@dominio.com');
    expect(passwordInput).toHaveValue('123456');
    userEvent.click(screen.getByRole('button', { name: /ENTRAR/i }));
    await waitFor(() => expect(spy).toBeCalledWith({ password: '123456', username: 'email@dominio.com' }));
  });
});
