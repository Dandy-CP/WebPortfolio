import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 100px;
`;

export const ContentEditor = styled.div``;

export const UploadCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 50px;

  input {
    margin-top: 50px;
    font-size: 1rem;
    width: 300px;
    text-align: center;
  }
`;

export const ButtonUpload = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  width: 150px;
  height: 40px;
  border-radius: 50px;
  border: 3px solid white;
  margin-top: 30px;

  &:hover {
    background-color: #00c7ff;
    border: 1px solid #00c7ff;
  }
`;

export const InputTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;

  input {
    width: 750px;
    height: 50px;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 50px;
    border: 3px solid #00c7ff;
  }
`;

export const ButtonPost = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1.25rem;
  font-weight: 700;
  width: 230px;
  height: 60px;
  border-radius: 50px;
  border: 3px solid white;

  &:hover {
    background-color: #00c7ff;
    border: 1px solid #00c7ff;
  }
`;
