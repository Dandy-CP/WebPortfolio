import { createContext, useMemo, useState } from 'react';

import Cookies from 'js-cookie';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState();
  const [loading, setLoading] = useState(true);

  const signIn = async (accessToken) => {
    try {
      Cookies.set('token', accessToken, { expires: 7, secure: true });
      setAuthData(accessToken);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      Cookies.remove('token');
      setAuthData(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  const isAuth = async () => {
    try {
      const tokenValue = Cookies.get('token');

      if (tokenValue !== undefined) {
        setAuthData(tokenValue);
        setLoading(false);
      } else {
        setAuthData(undefined);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const valueContext = useMemo(
    () => ({
      authData,
      loading,
      signIn,
      signOut,
      isAuth,
    }),
    [authData],
  );

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
