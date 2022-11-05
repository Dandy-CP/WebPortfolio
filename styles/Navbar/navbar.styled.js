import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;

  h3 {
    cursor: pointer;
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    justify-content: space-between;
    margin-left: 20px;
    margin-right: 20px;
  }

  @media screen and (max-width: 766px) {
    justify-content: space-between;
    margin-left: 20px;
  }
`;

export const ListMenu = styled.ul`
  display: flex;
  text-decoration: none;
  list-style: none;

  li {
    margin-left: 20px;
  }

  @media screen and (max-width: 766px) {
    li {
      display: none;
    }
  }
`;

export const ActiveLink = styled.a`
  display: inline-block;
  position: relative;
  color: ${(props) => (props.href === props.pathName ? 'white' : 'gray')};
  border-bottom: ${(props) =>
    props.href === props.pathName ? '2px solid #00c7ff' : 'none'};
  padding-bottom: 5px;
  transition: 0.2s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: #00c7ff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  &:hover {
    color: white;
  }
`;
