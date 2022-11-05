import styled from 'styled-components';

export const LoginContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

export const LoginForm = styled.div`
  width: 500px;
`;

export const ContainerDashboard = styled.div`
  margin-top: 50px;
`;

export const AdminName = styled.div`
  text-align: center;
  font-size: 1.2rem;
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
