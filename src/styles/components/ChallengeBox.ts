import styled, { css } from 'styled-components';

interface ButtonProps {
  fail?: boolean;
  succeeded?: boolean;
}

export const Container = styled.div`
  height: 100%;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

export const NotActiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.4;
    max-width: 70%;

    margin-top: 3rem;
  }
  img {
    margin-bottom: 1rem;
  }
`;

export const ActiveContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;

    padding: 0 2rem 1.5rem;
    border-bottom: 1px solid var(--gray-line);
  }
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-weight: 600;
      font-size: 2rem;
      color: var(--title);

      margin: 1.5rem 0 1rem;
    }
    p {
      line-height: 1.5rem;
    }
  }
  footer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: 600;
  color: var(--white);
  transition: 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  ${(props) =>
    props.fail &&
    css`
      background: var(--red);
    `}
  ${(props) =>
    props.succeeded &&
    css`
      background: var(--green);
    `};
`;
