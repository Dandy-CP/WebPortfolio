import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import {
  AdminName,
  ButtonAction,
  ContainerDashboard,
  LogOutAdmin,
  PostNewArticle,
} from '../../styles/AdminPage/AdminPage.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const AdminDashboard = ({ session }) => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [Admin, setAdmin] = useState([]);

  async function getProfile() {
    try {
      const { data, error, status } = await supabase
        .from('profiles')
        .select('username, full_name')
        .eq('id', user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setAdmin(data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProfile();
  }, [session]);

  return (
    <MainContainer>
      <ContainerDashboard>
        <AdminName>
          <h1>Hi Welcome Back {Admin.full_name}!!!</h1>
        </AdminName>

        <ButtonAction>
          <Link href="/Admin/CreatePost">
            <PostNewArticle>Post New Article</PostNewArticle>
          </Link>

          <LogOutAdmin onClick={() => supabase.auth.signOut()}>
            Log Out
          </LogOutAdmin>
        </ButtonAction>
      </ContainerDashboard>
    </MainContainer>
  );
};

export default AdminDashboard;
