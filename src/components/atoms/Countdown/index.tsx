import { useEffect, useState, useRef, useMemo } from 'react';
import { Container, StyledButton } from 'styles/components/Countdown';

import { useChallenge } from 'hooks/challenge';

const Countdown = (): any => {
  const [time, setTime] = useState(0.05 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallenge, activeChallenge } = useChallenge();

  const timeOut = useRef<NodeJS.Timeout>(null);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesFirstNumber, minutesSecondNumber] = String(minutes)
    .padStart(2, '0')
    .split('');

  const [secondsFirstNumber, secondsSecondNumber] = String(seconds)
    .padStart(2, '0')
    .split('');

  const startCountdown = (): any => {
    if (hasFinished) {
      setTime(25 * 60);
    }
    setIsActive(true);
  };

  const resetCountdown = (): any => {
    clearTimeout(timeOut.current);

    setIsActive(false);
    setTime(0.05 * 60);
  };

  useEffect(() => {
    if (isActive && time > 0) {
      timeOut.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
      startNewChallenge();
    }
  }, [isActive, time, startNewChallenge]);

  return (
    <div>
      <Container>
        <div>
          <span>{minutesFirstNumber}</span>
          <span>{minutesSecondNumber}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondsFirstNumber}</span>
          <span>{secondsSecondNumber}</span>
        </div>
      </Container>
      {hasFinished ? (
        <StyledButton disabled>Ciclo encerrado</StyledButton>
      ) : (
        <StyledButton
          onClick={isActive ? resetCountdown : startCountdown}
          active={isActive}
        >
          {isActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
        </StyledButton>
      )}
    </div>
  );
};

export default Countdown;
