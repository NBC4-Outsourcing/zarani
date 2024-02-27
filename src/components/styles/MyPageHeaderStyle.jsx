import { Link } from 'react-router-dom';
import styled from 'styled-components';

// :root{
//   --mainColor: #fab891;
//   --subColor1: #cae0d2;
//   --subColor2: #EEEEEE;
// }
export const HeaderArticle = styled.article`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  border-bottom: 2px solid var(--subColor2);
`;

export const HeaderNav = styled.section`
  width: 90%;
  min-width: 320px;
  padding: 1rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleP = styled.p`
  padding: 0 1rem;

  text-align: center;
  font-size: 2rem;
  font-weight: bold;
`;

// 홈버튼
export const HomeLink = styled(Link)`
  background-color: var(--subColor1);
  padding: 0.7rem 2rem;

  border: none;
  border-radius: 0.8rem;

  box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor1);
  text-align: center;
  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    background-color: ${(style) => style.hoverbgc || 'var(--subColor2)'};
    color: ${(style) => style.hovercolor || 'var(--mainColor1)'};
    box-shadow: 0rem 0rem 0.3rem 0rem var(--subColor2);
    transition: all 0.5s; // 시간차두고 바뀌도록 추가
    transform: scale(1.06, 1.06);
  }
`;

// 로그아웃 버튼
export const LogoutBtn = styled.button`
  background-color: var(--mainColor);
  padding: 0.7rem 2rem;

  border: none;
  border-radius: 0.8rem;

  box-shadow: 0rem 0rem 0.3rem 0rem var(--mainColor);
  text-align: center;
  font-size: 1.2rem;

  cursor: pointer;

  &:hover {
    background-color: var(--mainColor);
    box-shadow: 0rem 0rem 0.3rem 0rem var(--mainColor);
    transition: all 0.5s; // 시간차두고 바뀌도록 추가
    transform: scale(1.06, 1.06);
  }
`;
