import styled from 'styled-components';

export const ContainerSkill = styled.div`
  display: flex;
  align-items: center;
  margin-top: 150px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media screen and (max-width: 766px) {
    flex-direction: column;
  }
`;

export const SkillHeading = styled.div`
  margin-right: auto;

  h1 {
    font-size: 1.875rem;
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    margin-right: 0px;
    text-align: center;
    margin-bottom: 50px;
  }

  @media screen and (max-width: 766px) {
    margin-right: 0px;
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const SkillsLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 500px;

  @media screen and (max-width: 766px) {
    width: 300px;
    margin-left: 10px;
  }
`;

export const Skill = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  margin-bottom: 25px;
  width: 85px;
  /* margin-right: 25px; */
  /* margin-bottom: 20px; */

  p {
    text-align: center;
  }
`;
