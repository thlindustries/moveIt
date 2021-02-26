import React from 'react';
import { useChallenge } from 'hooks/challenge';

import { Container, Content } from 'styles/components/Modal';

const Modal: React.FC = () => {
  const { level, toggleLevelUpModal } = useChallenge();
  return (
    <Container>
      <Content>
        <header>{level}</header>
        <strong>Parabéns</strong>
        <p>Você alcançou um novo level.</p>
        <button onClick={toggleLevelUpModal} type="button">
          <img src="/icons/close.svg" alt="Close modal button" />
        </button>
      </Content>
    </Container>
  );
};

export default Modal;
