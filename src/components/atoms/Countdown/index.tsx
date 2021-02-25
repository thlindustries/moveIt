import { useEffect } from 'react';

import { useCountdown } from 'hooks/countdown';
import { useChallenge } from 'hooks/challenge';

import { Container, StyledButton } from 'styles/components/Countdown';

const Countdown = (): any => {
  const {
    minutes,
    seconds,
    isCountdownActive,
    hasFinished,
    resetCountdown,
    startCountdown,
  } = useCountdown();
  const { startNewChallenge, activeChallenge } = useChallenge();

  const [minutesFirstNumber, minutesSecondNumber] = String(minutes)
    .padStart(2, '0')
    .split('');

  const [secondsFirstNumber, secondsSecondNumber] = String(seconds)
    .padStart(2, '0')
    .split('');

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
          onClick={isCountdownActive ? resetCountdown : startCountdown}
          active={isCountdownActive}
        >
          {isCountdownActive ? 'Abandonar ciclo' : 'Iniciar um ciclo'}
        </StyledButton>
      )}
    </div>
  );
};

export default Countdown;
