import ExperienceBar from 'components/atoms/ExprienceBar';
import Head from 'next/head';

import Profile from 'components/atoms/Profile';
import CompletedChallenges from 'components/atoms/CompletedChallenges';
import Countdown from 'components/atoms/Countdown';
import ChallengeBox from 'components/atoms/ChallengeBox';

import * as S from 'styles/pages/Home';

const Home = (): any => (
  <S.Container>
    <Head>
      <title>Move It</title>
    </Head>
    <ExperienceBar />
    <section>
      <S.LeftContainer>
        <Profile />
        <CompletedChallenges />
        <Countdown />
      </S.LeftContainer>
      <S.RightContainer>
        <ChallengeBox />
      </S.RightContainer>
    </section>
  </S.Container>
);

export default Home;
