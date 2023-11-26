import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { Editor } from '@tinymce/tinymce-react';

import supabase from '../../config/supabaseClient';
import useAuth from '../../hooks/useAuth';
import { ButtonAction } from '../../styles/AdminPage/AdminPage.styled';
import {
  ButtonPost,
  ButtonUpload,
  Container,
  ContentEditor,
  InputTitle,
  UploadCover,
} from '../../styles/AdminPage/CreatePost.styled';
import { MainContainer } from '../../styles/GlobalStyle';

const NewBlogPost = () => {
  const [Upload, setUpload] = useState([]);
  const [UploadStatus, setUploadStatus] = useState('Waiting For Image...');
  const [PostStatus, setPostStatus] = useState('Waiting For Post Submit...');
  const [ErrorStatus, setErrorStatus] = useState('');
  const [GetImgURL, setGetImgUrl] = useState('');
  const [GetTitleBlog, setGetTitleBlog] = useState('');
  const editorRef = useRef(null);
  const router = useRouter();

  const { authData, isAuth } = useAuth();

  const HandleFileUpload = async () => {
    const { data, error } = await supabase.storage
      .from('coverimage')
      .upload(`${Upload.name}`, Upload, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      setUploadStatus(error);
      setErrorStatus('Error While Uploading Image');
    }

    if (data) {
      setUploadStatus('Upload Success');
    }
  };

  const HandleSubmitPost = async () => {
    const { error } = await supabase.from('BlogContentPost').insert({
      thumbnail: GetImgURL,
      Author: 'Dandy Candra Pratama',
      titlePost: GetTitleBlog,
      Content: editorRef.current.getContent(),
    });

    if (error) {
      setErrorStatus('Error While Submit Content');
    }

    setPostStatus(
      'Content Success Sumbit Redirect to Post Content in 3 Second',
    );

    setTimeout(() => {
      router.push(`../Blog/${GetTitleBlog.replace(/ /g, '-')}`);
    }, 3000);
  };

  useEffect(() => {
    isAuth();
  }, []);

  useEffect(() => {
    const { data } = supabase.storage
      .from('coverimage')
      .getPublicUrl(`${Upload.name}`);

    setGetImgUrl(data.publicUrl);
  }, [Upload]);

  return (
    <MainContainer>
      <Container>
        {authData ? (
          <>
            <h1>Post New Content Blog</h1>
            <UploadCover>
              {UploadStatus === 'Upload Success' ? (
                <Image src={GetImgURL} alt="cover" width={500} height={300} />
              ) : null}

              <input
                type="file"
                id="single"
                accept="image/*"
                onChange={(e) => {
                  setUpload(e.target.files[0]);
                }}
              />

              <ButtonUpload onClick={HandleFileUpload}>Upload</ButtonUpload>

              <p>{UploadStatus}</p>
            </UploadCover>

            <InputTitle>
              <input
                type="text"
                placeholder="Title Blog"
                onChange={(e) => setGetTitleBlog(e.target.value)}
              />
            </InputTitle>

            <ContentEditor>
              <Editor
                id="FIXED_ID"
                apiKey="vrvi8n9y59tnkhs7wee1ehekmkpfy2ojmlv4a37o39dhm50r"
                onInit={(evt, editor) => (editorRef.current = editor)}
                initialValue="<h1>Write Content Here...</h1>"
                init={{
                  height: 800,
                  menubar: true,
                  plugins: [
                    'advlist',
                    'autolink',
                    'lists',
                    'link',
                    'image',
                    'charmap',
                    'preview',
                    'anchor',
                    'searchreplace',
                    'visualblocks',
                    'code',
                    'fullscreen',
                    'insertdatetime',
                    'media',
                    'table',
                    'code',
                    'help',
                    'wordcount',
                    'codesample',
                  ],
                  codesample_languages: [
                    { text: 'HTML/XML', value: 'markup' },
                    { text: 'JavaScript', value: 'javascript' },
                    { text: 'CSS', value: 'css' },
                    { text: 'PHP', value: 'php' },
                    { text: 'Ruby', value: 'ruby' },
                    { text: 'Python', value: 'python' },
                    { text: 'Java', value: 'java' },
                    { text: 'C', value: 'c' },
                    { text: 'C#', value: 'csharp' },
                    { text: 'C++', value: 'cpp' },
                  ],
                  toolbar:
                    'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | image | codesample | help',
                  content_style:
                    'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                }}
              />
            </ContentEditor>

            <ButtonAction>
              <ButtonPost onClick={HandleSubmitPost}>
                {' '}
                Post New Content{' '}
              </ButtonPost>
            </ButtonAction>

            <p>{PostStatus}</p>
            <p>{ErrorStatus}</p>
          </>
        ) : (
          <h1>You Not Authenticated</h1>
        )}
      </Container>
    </MainContainer>
  );
};

export default NewBlogPost;
