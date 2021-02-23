import { useEffect, useState } from 'react';
import { Container, StyledButton } from 'styles/components/Countdown';

const Countdown = (): any => {
  const [time, setTime] = useState(25 * 60);
  const [active, setActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const [minutesFirstNumber, minutesSecondNumber] = String(minutes)
    .padStart(2, '0')
    .split('');

  const [secondsFirstNumber, secondsSecondNumber] = String(seconds)
    .padStart(2, '0')
    .split('');

  const startCountdown = (): any => {
    setActive(!active);
  };

  useEffect(() => {
    if (active && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

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
      <StyledButton onClick={startCountdown} active={active}>
        {active ? 'Pausar o ciclo' : 'Iniciar um ciclo'}
      </StyledButton>
    </div>
  );
};

export default Countdown;
