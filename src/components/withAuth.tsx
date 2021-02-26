import React from 'react';
import { NextPage } from 'next';
import Router from 'next/router';

import { useAuth } from 'hooks/auth';

import { isServer } from 'utils/functions';

const withAuth = (Component: NextPage): any => {
  const Auth: NextPage = (props: any): any => {
    const { userIsLogged } = useAuth();

    // const validateLogin = (): boolean => {
    //   // Aqui é bom fazer uma verificação passando o token que ta setado no header das reqs e ver se esse token é válido
    // };
    if (!isServer) {
      if (!userIsLogged()) {
        Router.push('/login');
      } else {
        return <Component {...props} />;
      }
    }
    return <></>;
  };

  return Auth;
};

export default withAuth;
