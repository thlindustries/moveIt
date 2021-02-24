import { useMemo } from 'react';

import { Container, ProgressBar } from 'styles/components/ExperienceBar';

import { useChallenge } from 'hooks/challenge';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useChallenge();

  const progressBarAt = useMemo(
    () => (100 * currentExperience) / experienceToNextLevel,
    [currentExperience, experienceToNextLevel],
  );

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <ProgressBar at={progressBarAt}>
          <span>{`${currentExperience}xp`}</span>
        </ProgressBar>
      </div>
      <span>{`${experienceToNextLevel} xp`}</span>
    </Container>
  );
};

export default ExperienceBar;
