import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignIn from '../../pages/SignIn';

const mockedHistoryPush = jest.fn();
const mockedSignIn = jest.fn();
const mockedAddToast = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      signIn: mockedSignIn,
    }),
  };
});

jest.mock('../../hooks/toast', () => {
  return {
    useToast: () => ({
      addToast: mockedAddToast,
    }),
  };
});

describe('SignIn page', () => {
  beforeEach(() => {
    mockedHistoryPush.mockClear();
  });

  it('should be able sign in', async () => {
    render(<SignIn />);

    const emailField = screen.getByPlaceholderText('E-mail');
    const passwordField = screen.getByPlaceholderText('Senha');
    const buttonElement = screen.getByText('Entrar');

    fireEvent.change(emailField, {
      target: { value: 'johndoe@example.com.br' },
    });

    fireEvent.change(passwordField, {
      target: { value: '123456' },
    });

    fireEvent.click(buttonElement);
    await waitFor(() =>
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard'),
    );
  });

  it('shoul not be able sign in with invalid credencials', async () => {
    render(<SignIn />);

    const emailField = screen.getByPlaceholderText('E-mail');
    const passwordField = screen.getByPlaceholderText('Senha');
    const buttonElement = screen.getByText('Entrar');

    fireEvent.change(emailField, {
      target: { value: 'invalid-email' },
    });

    fireEvent.change(passwordField, {
      target: { value: '123456' },
    });

    fireEvent.click(buttonElement);
    await waitFor(() => expect(mockedHistoryPush).not.toHaveBeenCalled());
  });

  it('shoul display an error when login fail', async () => {
    render(<SignIn />);

    mockedSignIn.mockImplementation(() => {
      throw new Error();
    });

    const emailField = screen.getByPlaceholderText('E-mail');
    const passwordField = screen.getByPlaceholderText('Senha');
    const buttonElement = screen.getByText('Entrar');

    fireEvent.change(emailField, {
      target: { value: 'johndoe@example.com.br' },
    });

    fireEvent.change(passwordField, {
      target: { value: '123456' },
    });

    fireEvent.click(buttonElement);
    await waitFor(() =>
      expect(mockedAddToast).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'error',
        }),
      ),
    );
  });
});
