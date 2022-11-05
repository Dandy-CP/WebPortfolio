import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { Auth, ThemeSupa } from '@supabase/auth-ui-react';

import AdminDashboard from '../../components/AdminPage/AdminDashboard';
import {
  LoginContainer,
  LoginForm,
} from '../../styles/AdminPage/AdminPage.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const Admin = () => {
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <MainContainer>
      {!session ? (
        <LoginContainer>
          <LoginForm>
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="dark"
            />
          </LoginForm>
        </LoginContainer>
      ) : (
        <AdminDashboard session={session} />
      )}
    </MainContainer>
  );
};

export default Admin;
