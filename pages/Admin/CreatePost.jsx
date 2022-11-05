import { Editor } from '@tinymce/tinymce-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

import supabase from '../../config/supabaseClient';
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
  const [UploadStatus, setUploadStatus] = useState('Waiting For Image');
  const [GetImgURL, setGetImgUrl] = useState('');
  const [GetTitleBlog, setGetTitleBlog] = useState('');
  const editorRef = useRef(null);

  /*   const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  }; */

  const HandleFileUpload = async () => {
    const { data, error } = await supabase.storage
      .from('coverimage')
      .upload(`${Upload.name}`, Upload, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      setUploadStatus(error);
    }

    if (data) {
      setUploadStatus('Upload Success');
    }
  };

  useEffect(() => {
    const { data } = supabase.storage
      .from('coverimage')
      .getPublicUrl(`${Upload.name}`);

    setGetImgUrl(data.publicUrl);
  }, [Upload]);

  const HandleSubmitPost = async () => {
    const { error } = await supabase.from('BlogContentPost').insert({
      thumbnail: GetImgURL,
      Author: 'Dandy Candra Pratama',
      titlePost: GetTitleBlog,
      Content: editorRef.current.getContent(),
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <MainContainer>
      <Container>
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
            initialValue="<p>Let's goo... start Writing!!!</p>"
            init={{
              height: 500,
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
              ],
              toolbar:
                'undo redo | blocks | ' +
                'bold italic forecolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help',
              content_style:
                'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            }}
          />
        </ContentEditor>

        <ButtonAction>
          <ButtonPost onClick={HandleSubmitPost}> Post New Content </ButtonPost>
        </ButtonAction>
      </Container>
    </MainContainer>
  );
};

export default NewBlogPost;
