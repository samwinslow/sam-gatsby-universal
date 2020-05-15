import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { baseColor, mutedColor, headFontStack, baseFontSize } from '../../constants/theme';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 2rem;
  row-gap: 0;
  padding: 0;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;

export const SeeAll = styled.figure`
  padding: 0 1rem;
  transition: background-color 0.2s ease;
  color: ${mutedColor};
  line-height: 1;
  font-weight: 400;
  font-family: ${headFontStack};
  text-decoration-style: none;
  :hover {
    background-color: rgba(0,0,0,0.05);
  }
  ${MEDIA.TABLET`
    padding-bottom: 1.6rem;
  `};
`;
