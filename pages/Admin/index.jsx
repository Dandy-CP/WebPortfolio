import { useState } from 'react';

import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';

import AdminDashboard from '../../components/AdminPage/AdminDashboard';
import {
  LoginContainer,
  LoginForm,
} from '../../styles/AdminPage/AdminPage.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const Admin = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [errorStatus, setErrorStatus] = useState('');
  const session = useSession();
  const supabase = useSupabaseClient();

  const signIn = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: mail,
      password: pass,
    });

    if (error) {
      setErrorStatus(`${error}`);
    }
  };

  return (
    <MainContainer>
      {!session ? (
        <LoginContainer>
          <LoginForm>
            <h1>Admin Login</h1>
            <input
              type="text"
              placeholder="Enter your email..."
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter a pasword..."
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />

            <button type="button" onClick={signIn}>
              Sign In
            </button>

            <p>{errorStatus}</p>
          </LoginForm>
        </LoginContainer>
      ) : (
        <AdminDashboard session={session} />
      )}
    </MainContainer>
  );
};

export default Admin;
