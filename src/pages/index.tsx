import ExperienceBar from 'components/atoms/ExprienceBar';
import Head from 'next/head';
import { GetServerSideProps } from 'next';

import { CountdownProvider } from 'hooks/countdown';
import { ChallengeProvider } from 'hooks/challenge';

import Profile from 'components/atoms/Profile';
import CompletedChallenges from 'components/atoms/CompletedChallenges';
import Countdown from 'components/atoms/Countdown';
import ChallengeBox from 'components/atoms/ChallengeBox';

import * as S from 'styles/pages/Home';

interface HomeServerProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home = ({
  level,
  currentExperience,
  challengesCompleted,
}: HomeServerProps): any => (
  <ChallengeProvider
    level={level}
    currentExperience={currentExperience}
    challengesCompleted={challengesCompleted}
  >
    <S.Container>
      <Head>
        <title>Move It</title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
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
      </CountdownProvider>
    </S.Container>
  </ChallengeProvider>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async (
  ctx,
): Promise<any> => {
  const {
    __moveit_level,
    __moveit_currentExperience,
    __moveit_challengesCompleted,
  } = ctx.req.cookies;

  return {
    props: {
      level: Number(__moveit_level),
      currentExperience: Number(__moveit_currentExperience),
      challengesCompleted: Number(__moveit_challengesCompleted),
    },
  };
};
