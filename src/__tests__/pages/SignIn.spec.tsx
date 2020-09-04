import React from 'react';
import { render } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

jest.mock('react-router-dom', () => {
  return {
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('SignIn page', () => {
  it('should be able Sign', () => {
    const { getByPlaceholderText } = render(<SignIn />);

    const emailField = getByPlaceholderText();
  });
});
