import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  height: 100vh;
  background: var(--blue);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BgContainer = styled.div`
  margin-right: auto;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  height: 500px;

  margin-right: 20rem;

  > img {
    width: 360px;
    height: 76px;
  }
  h3 {
    font-weight: 600;
    font-size: 36px;
    font-family: 'Inter';

    color: var(--white);
  }

  .git-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
    height: 60px;

    p {
      font-size: 20px;
      font-weight: 500;
      font-family: 'Inter';
      color: var(--text-highlight);
    }
    img {
      margin-right: 16px;
    }
  }
`;

export const LoginButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    color: var(--white);
    font-size: 20px;
    font-family: 'Inter';
    padding: 0 12px;

    ::-webkit-input-placeholder {
      text-align: center;
      color: var(--text-highlight);
      font-size: 20px;
    }

    width: 340px;
    height: 80px;

    border: 1px solid transparent;
    border-radius: 5px 0 0 5px;
    background: transparent;
    background: linear-gradient(
      60deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 85%
    );

    transition: border 0.4s;
    &:hover {
      border: solid 1px #000;
    }
  }
  button {
    width: 80px;
    height: 80px;

    border: none;
    background: var(--blue-dark);
    border-radius: 0 5px 5px 0;

    transition: 0.4s;

    svg {
      color: var(--white);
    }

    &:hover {
      background: var(--green);
    }
  }
`;
