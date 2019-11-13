import styled from 'styled-components';
import { headFontStack, baseColor } from '../../constants/theme';

export const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-family: ${headFontStack};

  p {
    font-size: 80%;
    margin-bottom: 0.2rem;
    opacity: 0.5;
  }
  a {
    color: ${baseColor};
    opacity: 0.5;
    transition: opacity 0.2s ease;
    text-decoration: none;
    :hover{
      opacity: 1;
    }
  }
`;
