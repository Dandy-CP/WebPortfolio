import styled from 'styled-components';

export const LoginContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 500px;
  padding: 40px;
  background-color: #000f2e;
  border: 2px solid #009ac5;
  border-radius: 10px;

  input {
    width: 400px;
    height: 40px;
    margin-bottom: 30px;
    border-radius: 10px;
    font-size: 1.1rem;
    font-weight: 500;
    border: 2px solid white;
  }

  button {
    background-color: transparent;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    width: 150px;
    height: 40px;
    margin-top: 10px;
    border-radius: 50px;
    border: 2px solid white;
    transition: 0.5s ease-in-out;

    &:hover {
      background-color: #00c7ff;
    }
  }

  h1 {
    margin-top: 0px;
    margin-bottom: 50px;
  }

  p {
    margin-top: 50px;
    font-weight: 600;
    color: red;
  }
`;

export const ContainerDashboard = styled.div`
  margin-top: 50px;
`;

export const AdminName = styled.div`
  h1 {
    text-align: center;
    font-size: 3rem;
    margin-bottom: 0px;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const ButtonAction = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

export const PostNewArticle = styled.button`
  background-color: transparent;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  width: 200px;
  height: 50px;
  border-radius: 50px;
  border: 2px solid white;
  transition: 0.5s ease-in-out;

  &:hover {
    background-color: #00c7ff;
  }
`;

export const LogOutAdmin = styled(PostNewArticle)`
  margin-left: 20px;
`;

export const BlogAction = styled.div`
  display: flex;
  justify-content: space-evenly;

  p {
    margin-right: 10px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: #00c7ff;
    }
  }
`;

export const Delete = styled(PostNewArticle)`
  width: 150px;
  height: 35px;
  font-size: 1rem;
`;

export const EditContent = styled(Delete)`
  margin-left: 10px;
`;

export const NotAdmin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000f2e;
  border: 2px solid #009ac5;
  border-radius: 10px;
  margin: 150px;
  padding: 50px;

  h1 {
    margin-bottom: 50px;
  }
`;
