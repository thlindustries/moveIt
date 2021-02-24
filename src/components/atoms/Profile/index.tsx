import { Container } from 'styles/components/Profile';
import { useChallenge } from 'hooks/challenge';

const Profile = (): any => {
  const { level } = useChallenge();

  return (
    <Container>
      <img src="https://github.com/thlindustries.png" alt="Thiago Kraetzer" />
      <div>
        <strong>Thiago Kraetzer</strong>
        <p>
          <img src="icons/level.svg" alt="level icon" />
          {`Level ${level}`}
        </p>
      </div>
    </Container>
  );
};

export default Profile;
