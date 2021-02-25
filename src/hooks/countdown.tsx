import {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
  ReactNode,
} from 'react';

import { useChallenge } from 'hooks/challenge';

interface CountdownContextProps {
  children: ReactNode;
}

interface CountdownContextData {
  minutes: number;
  seconds: number;
  hasFinished: boolean;
  isCountdownActive: boolean;
  startCountdown(): void;
  resetCountdown(): void;
}

const CountdownContext = createContext<CountdownContextData>(
  {} as CountdownContextData,
);

export const CountdownProvider = ({ children }: CountdownContextProps): any => {
  const [time, setTime] = useState(25 * 60);
  const [isCountdownActive, setIsCountdownActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const { startNewChallenge } = useChallenge();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const timeOut = useRef<NodeJS.Timeout>(null);

  const startCountdown = (): any => {
    if (hasFinished) {
      setTime(25 * 60);
    }
    setIsCountdownActive(true);
  };

  const resetCountdown = (): any => {
    clearTimeout(timeOut.current);

    setHasFinished(false);
    setIsCountdownActive(false);
    setTime(0.05 * 60);
  };

  useEffect(() => {
    if (isCountdownActive && time > 0) {
      timeOut.current = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isCountdownActive && time === 0) {
      setHasFinished(true);
      setIsCountdownActive(false);
      startNewChallenge();
    }
  }, [
    isCountdownActive,
    time,
    setHasFinished,
    setIsCountdownActive,
    timeOut,
    setTime,
    startNewChallenge,
  ]);

  return (
    <CountdownContext.Provider
      value={{
        minutes,
        seconds,
        hasFinished,
        isCountdownActive,
        startCountdown,
        resetCountdown,
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
};

export function useCountdown(): CountdownContextData {
  const context = useContext(CountdownContext);

  return context;
}
