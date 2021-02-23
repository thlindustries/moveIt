import { Container } from 'styles/components/Profile';

const Profile = (): any => (
  <Container>
    <img src="https://github.com/thlindustries.png" alt="Thiago Kraetzer" />
    <div>
      <strong>Thiago Kraetzer</strong>
      <p>
        <img src="icons/level.svg" alt="level icon" />
        Level 100
      </p>
    </div>
  </Container>
);

export default Profile;
