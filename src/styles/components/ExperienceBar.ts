import styled from 'styled-components';

interface ProgressBarProps {
  at: number;
}

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div {
    position: relative;
    flex: 1;
    height: 4px;

    border-radius: 4px;
    background: var(--gray-line);
    margin: 0 1.5rem;
  }
`;

export const ProgressBar = styled.div<ProgressBarProps>`
  position: relative;
  width: ${(props) => props.at && `${props.at}%`};
  height: 100%;

  border-radius: 4px;
  background: var(--green);

  transition: width 0.4s;
  span {
    position: absolute;
    right: 0;
    margin-right: -40px;
    margin-top: 10px;
  }
`;
