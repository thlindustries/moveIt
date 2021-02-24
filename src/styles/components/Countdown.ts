import styled, { css } from 'styled-components';

interface ButtonProps {
  active?: boolean;
  disabled?: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-family: Rajdhani;
  font-weight: 600;
  color: var(--title);

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  }

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgb(0, 0, 0, 0.05);

    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span {
      flex: 1;
      &:first-child {
        border-right: 1px solid #f0f1f3;
      }
      &:last-child {
        border-left: 1px solid #f0f1f3;
      }
    }
  }
`;

export const StyledButton = styled.button<ButtonProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  transition: background-color 0.2s;

  color: var(--white);

  background: var(--blue);

  &:hover {
    background: var(--blue-dark);
  }

  ${(props) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      background: var(--white);
      color: var(--text);
      opacity: 0.5;
      pointer-events: none;
    `}

  ${(props) =>
    props.active &&
    css`
      background: var(--white);
      color: var(--title);

      &:hover {
        background: var(--red);
        color: var(--white);
      }
    `}

  font-size: 1.25rem;
  font-weight: 600;
`;
