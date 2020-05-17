import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;
