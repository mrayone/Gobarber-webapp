import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Input from '../../components/Input';
import 'jest-styled-components';

jest.mock('@unform/core', () => {
  return {
    useField(name?: string) {
      return {
        fieldName: 'email',
        defaultValue: '',
        error: '',
        registerField: jest.fn(),
      };
    },
  };
});

describe('Input component', () => {
  it('should be able to render an input', () => {
    render(<Input name="email" placeholder="E-mail" />);

    expect(screen.getByPlaceholderText('E-mail')).toBeTruthy();
  });

  it('should render highlight on input focus', async () => {
    const { getByPlaceholderText, getByTestId } = render(
      <Input name="email" placeholder="E-mail" />,
    );

    const inputElement = getByPlaceholderText('E-mail');
    const containerElement = getByTestId('input-container');

    fireEvent.focus(inputElement);

    await waitFor(() => {
      expect(containerElement).toHaveStyleRule('border', '2px solid #ff9000');
      expect(containerElement).toHaveStyleRule('color', '#ff9000');
    });

    fireEvent.blur(inputElement);

    await waitFor(() => {
      expect(containerElement).not.toHaveStyleRule(
        'border:',
        '2px solid #ff9000',
      );
      expect(containerElement).not.toHaveStyleRule('color', '#ff9000');
    });
  });
});
