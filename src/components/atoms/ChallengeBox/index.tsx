import React from 'react';

import { useChallenge } from 'hooks/challenge';

import {
  Container,
  ActiveContainer,
  NotActiveContainer,
  StyledButton,
} from 'styles/components/ChallengeBox';

const ChallengeBox = (): any => {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenge();

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
            <StyledButton onClick={resetChallenge} type="button" fail>
              Falhei
            </StyledButton>
            <StyledButton onClick={completeChallenge} type="button" succeeded>
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
