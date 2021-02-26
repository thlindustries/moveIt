import ExperienceBar from 'components/atoms/ExprienceBar';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';

import { CountdownProvider } from 'hooks/countdown';
import { ChallengeProvider } from 'hooks/challenge';
import { useAuth } from 'hooks/auth';

import Profile from 'components/atoms/Profile';
import CompletedChallenges from 'components/atoms/CompletedChallenges';
import Countdown from 'components/atoms/Countdown';
import ChallengeBox from 'components/atoms/ChallengeBox';

import withAuth from 'components/withAuth';

import * as S from 'styles/pages/Home';

interface HomeServerProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

const Home: NextPage<HomeServerProps> = ({
  level,
  currentExperience,
  challengesCompleted,
}): any => {
  const { signOut } = useAuth();

  return (
    <ChallengeProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <S.Container>
        <button type="button" onClick={signOut}>
          sair
        </button>
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
};

export default withAuth(Home);

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
