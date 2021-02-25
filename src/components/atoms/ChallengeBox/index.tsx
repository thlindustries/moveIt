import React from 'react';

import { useChallenge } from 'hooks/challenge';
import { useCountdown } from 'hooks/countdown';

import {
  Container,
  ActiveContainer,
  NotActiveContainer,
  StyledButton,
} from 'styles/components/ChallengeBox';

const ChallengeBox = (): any => {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenge();
  const { resetCountdown } = useCountdown();

  const handleChallangeAction = (action: string): void => {
    if (action === 'succeed') {
      completeChallenge();
    }
    if (action === 'fail') {
      resetChallenge();
    }
    resetCountdown();
  };

  return (
    <Container>
      {activeChallenge ? (
        <ActiveContainer>
          <header>{`Ganhe ${activeChallenge.amount} xp`}</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body icon" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <StyledButton
              onClick={() => handleChallangeAction('fail')}
              type="button"
              fail
            >
              Falhei
            </StyledButton>
            <StyledButton
              onClick={() => handleChallangeAction('succeed')}
              type="button"
              succeeded
            >
              Completei
            </StyledButton>
          </footer>
        </ActiveContainer>
      ) : (
        <NotActiveContainer>
          <strong>Finalize um ciclo para receber um novo desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </NotActiveContainer>
      )}
    </Container>
  );
};

export default ChallengeBox;
