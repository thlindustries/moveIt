import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
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
  }, []);

  const resetChallenge = useCallback(() => {
    setActiveChallenge(null);
  }, []);

  const completeChallenge = useCallback(() => {
    setChallengesCompleted(challengesCompleted + 1);
    setCurrentExperience(currentExperience + activeChallenge.amount);
    if (currentExperience + activeChallenge.amount >= experienceToNextLevel) {
      const exceededExprience = currentExperience + activeChallenge.amount;
      setCurrentExperience(exceededExprience - experienceToNextLevel);
      levelUp();
    }
    setActiveChallenge(null);
  }, [
    challengesCompleted,
    currentExperience,
    activeChallenge,
    levelUp,
    experienceToNextLevel,
  ]);

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
