import React, { useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/router';

import { Editor } from '@tinymce/tinymce-react';

import supabase from '../../../config/supabaseClient';
import { ButtonAction } from '../../../styles/AdminPage/AdminPage.styled';
import {
  ButtonPost,
  Container,
  ContentEditor,
  InputTitle,
} from '../../../styles/AdminPage/CreatePost.styled';
import { MainContainer } from '../../../styles/GlobalStyle';

const EditPost = () => {
  const [GetContent, setGetContent] = useState([]);
  const [GetTitleBlog, setGetTitleBlog] = useState('');
  const [PostStatus, setPostStatus] = useState('Waiting For Post Submit...');
  const editorRef = useRef(null);
  const router = useRouter();
  const { editPost } = router.query;

  const getTitle = editPost ? editPost.replace(/-/g, ' ') : '';

  useEffect(() => {
    const fetchContent = async () => {
      const { data, error } = await supabase
        .from('BlogContentPost')
        .select()
        .eq('titlePost', `${getTitle}`);

      if (error) {
        console.log(error);
      }

      if (data) {
        setGetContent(data);
      }
    };

    fetchContent();
  }, [getTitle]);

  const HandleUpdatePost = async () => {
    const { error } = await supabase
      .from('BlogContentPost')
      .update({
        titlePost: GetTitleBlog,
        Content: editorRef.current.getContent(),
      })
      .eq('titlePost', `${getTitle}`);

    if (error) {
      console.log(error);
    }

    setPostStatus(
      'Content Success Sumbit Redirect to Post Content in 3 Second',
    );

    setTimeout(() => {
      router.push(`../../Blog/${GetTitleBlog.replace(/ /g, '-')}`);
    }, 3000);
  };

  return (
    <MainContainer>
      <Container>
        <h1>Edit Current Content Blog</h1>
        {GetContent.map((data) => (
          <InputTitle key={data.postID}>
            <input
              type="text"
              placeholder="Title Blog"
              defaultValue={data.titlePost}
              onChange={(e) => setGetTitleBlog(e.target.value)}
            />
          </InputTitle>
        ))}

        {GetContent.map((data) => (
          <ContentEditor key={data.postID}>
            <Editor
              id="FIXED_ID"
              apiKey="vrvi8n9y59tnkhs7wee1ehekmkpfy2ojmlv4a37o39dhm50r"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={data.Content}
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
        ))}

        <ButtonAction>
          <ButtonPost onClick={HandleUpdatePost}>
            Post Edited Content
          </ButtonPost>
        </ButtonAction>

        <p>{PostStatus}</p>
      </Container>
    </MainContainer>
  );
};

export default EditPost;
