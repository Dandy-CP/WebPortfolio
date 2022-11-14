import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useSupabaseClient, useUser } from '@supabase/auth-helpers-react';

import {
  AdminName,
  BlogAction,
  ButtonAction,
  ContainerDashboard,
  Delete,
  EditContent,
  LogOutAdmin,
  NotAdmin,
  PostNewArticle,
} from '../../styles/AdminPage/AdminPage.styled';
import {
  CardPost,
  ContainerLatestPost,
  LatestPostWrap,
  ThumbnailPost,
} from '../../styles/BlogPage/LatestPost.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const AdminDashboard = ({ session }) => {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [Admin, setAdmin] = useState([]);
  const [Blog, setBlog] = useState([]);

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

  useEffect(() => {
    const fetchAllBlog = async () => {
      const { data, error } = await supabase.from('BlogContentPost').select();

      if (error) {
        console.log(error);
      }

      if (data) {
        setBlog(data);
      }
    };

    fetchAllBlog();
  }, []);

  const handleDeleteContent = async (ID) => {
    const { error } = await supabase
      .from('BlogContentPost')
      .delete()
      .eq('titlePost', ID);

    if (error) {
      console.log(error);
    }

    location.reload();
  };

  return (
    <MainContainer>
      <ContainerDashboard>
        <AdminName>
          <h1>Hi Welcome Back {Admin.full_name}!!!</h1>
          <p>You Can Delete and Edit Your Post Here...</p>
        </AdminName>

        {Admin.full_name === 'Dandy Candra Pratama' ? (
          <>
            <ButtonAction>
              <Link href="/Admin/CreatePost">
                <PostNewArticle>Post New Article</PostNewArticle>
              </Link>

              <LogOutAdmin onClick={() => supabase.auth.signOut()}>
                Log Out
              </LogOutAdmin>
            </ButtonAction>

            <ContainerLatestPost>
              <LatestPostWrap>
                {Blog.map((data) => (
                  <CardPost key={data.postID}>
                    <Link href={`Blog/${data.titlePost.replace(/ /g, '-')}`}>
                      <ThumbnailPost>
                        <Image
                          src={data.thumbnail}
                          alt={data.titlePost}
                          width={350}
                          height={200}
                          draggable="false"
                        />
                      </ThumbnailPost>
                    </Link>
                    <Link href={`Blog/${data.titlePost.replace(/ /g, '-')}`}>
                      <h1>{data.titlePost}</h1>
                    </Link>

                    <p>
                      Posted On {data.createdAt.slice(0, 10).replace(/-/g, '/')}
                    </p>

                    <BlogAction>
                      <Delete
                        onClick={() => {
                          handleDeleteContent(data.titlePost);
                        }}
                      >
                        Delete Content
                      </Delete>

                      <Link
                        href={`Admin/edit-post/${data.titlePost.replace(
                          / /g,
                          '-',
                        )}`}
                      >
                        <EditContent>Edit Content</EditContent>
                      </Link>
                    </BlogAction>
                  </CardPost>
                ))}
              </LatestPostWrap>
            </ContainerLatestPost>
          </>
        ) : (
          <NotAdmin>
            <h1>Sorry you are not an admin !!!</h1>
            <LogOutAdmin onClick={() => supabase.auth.signOut()}>
              Log Out
            </LogOutAdmin>
          </NotAdmin>
        )}
      </ContainerDashboard>
    </MainContainer>
  );
};

export default AdminDashboard;
