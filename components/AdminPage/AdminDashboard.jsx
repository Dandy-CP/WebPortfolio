import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useSupabaseClient } from '@supabase/auth-helpers-react';

import useAuth from '../../hooks/useAuth';
import {
  AdminName,
  BlogAction,
  ButtonAction,
  ContainerDashboard,
  Delete,
  EditContent,
  LogOutAdmin,
  PostNewArticle,
} from '../../styles/AdminPage/AdminPage.styled';
import {
  CardPost,
  ContainerLatestPost,
  LatestPostWrap,
  ThumbnailPost,
} from '../../styles/BlogPage/LatestPost.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const AdminDashboard = () => {
  const supabase = useSupabaseClient();
  const [Blog, setBlog] = useState([]);
  const [ErrorStatus, setErrorStatus] = useState('');

  const { signOut } = useAuth();

  const fetchAllBlog = async () => {
    const { data, error } = await supabase.from('BlogContentPost').select();

    if (error) {
      setErrorStatus('Error While Fetching Data Blog');
    }

    if (data) {
      setBlog(data);
      setErrorStatus('');
    }
  };

  const handleDeleteContent = async (ID) => {
    const { error } = await supabase
      .from('BlogContentPost')
      .delete()
      .eq('titlePost', ID);

    if (error) {
      setErrorStatus('Error While Delete Content');
    }

    location.reload();
  };

  useEffect(() => {
    fetchAllBlog();
  }, []);

  return (
    <MainContainer>
      <ContainerDashboard>
        <AdminName>
          <h1>Hi Welcome Back!!!</h1>
          <p>You Can Delete and Edit Your Post Here...</p>
          <p>{ErrorStatus}</p>
        </AdminName>

        <ButtonAction>
          <Link href="/admin/CreatePost">
            <PostNewArticle>Post New Article</PostNewArticle>
          </Link>

          <LogOutAdmin
            onClick={() => {
              signOut();
            }}
          >
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
      </ContainerDashboard>
    </MainContainer>
  );
};

export default AdminDashboard;
