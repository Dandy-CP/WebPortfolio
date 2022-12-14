import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;

  p {
    text-align: center;
    margin-top: 50px;
    font-weight: 600;
    font-size: 1.3rem;
  }

  h1 {
    text-align: center;
    margin-bottom: 100px;
    font-size: 3rem;
  }
`;

export const ContentEditor = styled.div`
  border: 2px solid #009ac5;
  border-radius: 10px;
  padding: 5px;
`;

export const UploadCover = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 30px;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 50px;
  background-color: #000f2e;
  border: 2px solid #009ac5;
  border-radius: 10px;

  input {
    font-size: 1rem;
    width: 300px;
    text-align: center;
  }

  p {
    margin-top: 30px;
    margin-bottom: 0px;
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
    border-radius: 20px;
    border: 3px solid #009ac5;
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
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #00c7ff;
    border: 1px solid #00c7ff;
  }
`;
