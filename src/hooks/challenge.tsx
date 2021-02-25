import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
  useEffect,
} from 'react';

import challenges from 'services/challenges.json';

interface ChallengeContextProps {
  children: ReactNode;
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
  levelUp(): void;
  startNewChallenge(): void;
  resetChallenge(): void;
  completeChallenge(): void;
}

const ChallengeContext = createContext<ChallengeContextData>(
  {} as ChallengeContextData,
);

export const ChallengeProvider = ({ children }: ChallengeContextProps): any => {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState<Challenge>(null);

  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
  }, [level]);

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
        startNewChallenge,
        resetChallenge,
        completeChallenge,
      }}
    >
      {children}
    </ChallengeContext.Provider>
  );
};

export function useChallenge(): ChallengeContextData {
  const context = useContext(ChallengeContext);

  return context;
}
