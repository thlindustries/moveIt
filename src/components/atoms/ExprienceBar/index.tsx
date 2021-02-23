import { Container, ProgressBar } from 'styles/components/ExperienceBar';

const ExperienceBar: React.FC = () => (
  <Container>
    <span>0 xp</span>
    <div>
      <ProgressBar at={37}>
        <span>5400xp</span>
      </ProgressBar>
    </div>
    <span>0 xp</span>
  </Container>
);

export default ExperienceBar;
