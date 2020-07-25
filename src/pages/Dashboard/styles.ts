import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: none;

    svg {
      height: 20px;
      width: 20px;
      color: #999591;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
  > img {
    height: 86px;
    width: 86px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;
    > span {
      color: #f4ede8;
      font-family: 'Roboto Slab';
      font-size: 16px;
    }

    > strong {
      color: #ff9000;
    }
  }
`;
