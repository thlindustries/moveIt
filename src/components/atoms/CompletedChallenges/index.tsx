import { Container } from 'styles/components/CompletedChallenges';
import { useChallenge } from 'hooks/challenge';

const CompletedChallenges = (): any => {
  const { challengesCompleted } = useChallenge();

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </Container>
  );
};

export default CompletedChallenges;
