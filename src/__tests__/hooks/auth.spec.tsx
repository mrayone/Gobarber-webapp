import { renderHook, act } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import { useAuth, AuthProvider } from '../../hooks/auth';
import api from '../../services/apiClient';

const apiMock = new MockAdapter(api);
const userResp = {
  id: 'user-123',
  name: 'John Doe',
  email: 'johndoe@example.com.br',
};

describe('Auth hook', () => {
  it('should be able to sign', async () => {
    apiMock.onPost('sessions').reply(200, {
      user: userResp,
      token: 'token-123',
    });

    const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result, waitForNextUpdate } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'johndoe@example.com.br',
      password: '123456',
    });

    await waitForNextUpdate();
    expect(setItemSpy).toHaveBeenCalledWith('@GoBarber:token', 'token-123');
    expect(setItemSpy).toHaveBeenCalledWith(
      '@GoBarber:user',
      JSON.stringify(userResp),
    );
    expect(result.current.user.email).toBe('johndoe@example.com.br');
  });

  it('should restore saved data from store when auth inits', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      const obj: { [key: string]: string } = {
        '@GoBarber:user': JSON.stringify(userResp),
        '@GoBarber:token': 'token-123',
      };

      return obj[key];
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user.email).toBe('johndoe@example.com.br');
  });

  it('should be able to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      const obj: { [key: string]: string } = {
        '@GoBarber:user': JSON.stringify(userResp),
        '@GoBarber:token': 'token-123',
      };

      return obj[key];
    });
    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.signOut();
    });

    expect(result.current.user).toBeUndefined();
    expect(removeItemSpy).toBeCalled();
  });

  it('should be able to update user data', async () => {
    const updateItemSpy = jest.spyOn(Storage.prototype, 'setItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    const user = {
      id: 'user-123',
      name: 'John Doe',
      email: 'johndoe@example.com.br',
      avatar_url: 'img64.jpeg',
    };

    act(() => {
      result.current.updateUser(user);
    });

    expect(updateItemSpy).toBeCalledWith(
      '@GoBarber:user',
      JSON.stringify(user),
    );
  });
});
