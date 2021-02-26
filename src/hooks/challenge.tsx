import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from 'react';
import Cookies from 'js-cookie';

import challenges from 'services/challenges.json';
import Modal from 'components/atoms/Modal';

interface ChallengeContextProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

interface Challenge {
  type: string;
  description: string;
  amount: number;
}

interface ChallengeContextData {
  level: number;
  currentExperience: number;
  experienceToNextLevel: number;
  challengesCompleted: number;
  activeChallenge: Challenge;
  toggleLevelUpModal(): void;
  levelUp(): void;
  startNewChallenge(): void;
  resetChallenge(): void;
  completeChallenge(): void;
}

const ChallengeContext = createContext<ChallengeContextData>(
  {} as ChallengeContextData,
);

export const ChallengeProvider = ({
  children,
  ...rest
}: ChallengeContextProps): any => {
  const [showLevelUpModal, setShowLevelUpModal] = useState(false);
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0,
  );
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);

  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const toggleLevelUpModal = useCallback(() => {
    setShowLevelUpModal(!showLevelUpModal);
  }, [showLevelUpModal]);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
    toggleLevelUpModal();
  }, [level, toggleLevelUpModal]);

  const startNewChallenge = useCallback(() => {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const randomChallenge = challenges[randomChallengeIndex];
    setActiveChallenge(randomChallenge);

    new Audio('/notification.mp3').play();

    if (Notification.permission === 'granted') {
      // eslint-disable-next-line no-new
      new Notification('Novo desafio  🎉', {
        body: `Valendo ${randomChallenge.amount}xp!`,
      });
    }
  }, []);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const completeChallenge = useCallback(() => {
    if (!activeChallenge) {
      return;
    }

    let exceededExprience = currentExperience + activeChallenge.amount;
    if (exceededExprience > experienceToNextLevel) {
      levelUp();
      exceededExprience -= experienceToNextLevel;
    }
    setCurrentExperience(exceededExprience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }, [
    challengesCompleted,
    currentExperience,
    activeChallenge,
    levelUp,
    experienceToNextLevel,
  ]);

  useEffect(() => {
    const user = { name: 'Thiago', email: 'thlindustries23@gmail.com' };

    Cookies.set('__moveit_level', String(level));
    Cookies.set('__moveit_currentExperience', String(currentExperience));
    Cookies.set('__moveit_challengesCompleted', String(challengesCompleted));

    // Cookies.set('__moveit_user', JSON.stringify(user));
  }, [level, currentExperience, challengesCompleted]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  return (
    <ChallengeContext.Provider
      value={{
        level,
        currentExperience,
        challengesCompleted,
        experienceToNextLevel,
        activeChallenge,
        levelUp,
        toggleLevelUpModal,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
      {showLevelUpModal && <Modal />}
    </ChallengeContext.Provider>
  );
};

export function useChallenge(): ChallengeContextData {
  const context = useContext(ChallengeContext);

  return context;
}
