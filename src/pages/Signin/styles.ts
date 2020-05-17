import styled from 'styled-components';
import { shade } from 'polished';
import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin: 24px 0;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      color: #f4ede8;
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: #666260;
      }

      & + input {
        margin-top: 10px;
      }
    }

    button {
      background: #ff9000;
      border-radius: 10px;
      height: 56px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      margin: 10px 0;
      color: #312e38;
      font-weight: 500px;
      transition: background-color 0.3s;
      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`;
