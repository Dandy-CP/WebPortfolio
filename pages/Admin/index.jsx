import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import AdminDashboard from '../../components/AdminPage/AdminDashboard';
import { setupToken } from '../../config/queryClient';
import useAuth from '../../hooks/useAuth';
import { Login } from '../../service/api/auth/auth.mutation';
import {
  LoginContainer,
  LoginForm,
} from '../../styles/AdminPage/AdminPage.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const Admin = () => {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');

  const { authData, signIn, isAuth } = useAuth();

  const { isPending, mutateAsync: funcLogin } = Login({
    onMutate: () => {
      toast.info('Please Wait...');
    },
    onSuccess: (data) => {
      signIn(data.access_token);
      setupToken(data.access_token);
      toast('Welcome Back...');
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });

  const handleSignIn = async () => {
    funcLogin({
      username: uname,
      password: pass,
    });
  };

  useEffect(() => {
    isAuth();
  }, []);

  return (
    <MainContainer>
      {!authData ? (
        <LoginContainer>
          <LoginForm>
            <h1>Admin Login</h1>
            <input
              type="text"
              placeholder="Username"
              value={uname}
              onChange={(e) => setUname(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter a pasword..."
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button
              type="button"
              onClick={() => {
                handleSignIn();
              }}
              disabled={isPending}
            >
              Sign In
            </button>
          </LoginForm>
        </LoginContainer>
      ) : (
        <AdminDashboard />
      )}
    </MainContainer>
  );
};

export default Admin;
