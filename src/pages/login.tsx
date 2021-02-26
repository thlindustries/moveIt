import React, { useCallback, useRef } from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { useAuth } from 'hooks/auth';

import {
  Container,
  BgContainer,
  LoginContainer,
  LoginButtonContainer,
} from 'styles/pages/Login';

// https://github.com/login/oauth/authorize

const HomePage: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const { signIn } = useAuth();

  const handleLogin = useCallback(() => {
    signIn({ email: emailRef.current?.value });
  }, [emailRef, signIn]);

  return (
    <Container>
      <BgContainer>
        <img src="simbolo.png" alt="simbolo" />
      </BgContainer>
      <LoginContainer>
        <img src="logo.png" alt="Moveit logo" />
        <h3>Bem-vindo</h3>
        <div className="git-info">
          <img src="githubicon.png" alt="github" />
          <p>Faça login com seu Github para começar</p>
        </div>
        <LoginButtonContainer>
          <input ref={emailRef} type="text" placeholder="Digite seu username" />
          <button onClick={handleLogin} type="button">
            <FiArrowRight size={40} />
          </button>
        </LoginButtonContainer>
      </LoginContainer>
    </Container>
  );
};

export default HomePage;
