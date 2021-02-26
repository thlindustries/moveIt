import React, { createContext, useCallback, useState, useContext } from 'react';
import Cookie from 'js-cookie';

// import api from 'services/api';

interface UserInterface {
  name: string;
  email: string;
}

interface AuthContextData {
  user: UserInterface;
  senha?: string;
  userIsLogged(): boolean;
  signIn(loginInfo: Login): Promise<void>;
  signOut(): void;
}

interface Login {
  email: string;
}

interface UserLoginData {
  user: UserInterface;
}

// interface MovieTypeView {
//   [x: string]: string;
// }

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<UserLoginData>(() => {
    const token = Cookie.get('__moveit_token');
    const user = Cookie.get('__moveit_user');

    if (user) {
      // api.defaults.headers.authorization = `Bearer ${token}`;
      return {
        token,
        user: JSON.parse(user),
      };
    }

    return {} as UserLoginData;
  });

  const signIn = useCallback(async ({ email }: Login) => {
    // const response = await api.post<UserInterface>(
    //   `${process.env.REACT_APP_API_URL}/login`,
    //   {
    //     username,
    //     password,
    //   },
    // );

    const response = await fetch(
      `https://github.com/login/oauth/authorize?login=${email}&id=f55d94009bb1a36a2c2e`,
      {
        method: 'GET',
        mode: 'cors',
      },
    );
    console.log(response);
    const user = { name: 'thiago', email: 'thlindustries23@gmail.com' };

    // const user = response.data;

    setData({
      user,
    });
  }, []);

  const signOut = useCallback(() => {
    Cookie.remove('__moveit_user');
    Cookie.remove('__moveit_token');

    setData({} as UserLoginData);
  }, []);

  const userIsLogged = useCallback((): boolean => {
    if (data.user && data.user.name) {
      return true;
    }
    return false;
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        userIsLogged,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
