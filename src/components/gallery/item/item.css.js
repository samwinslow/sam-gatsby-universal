import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { baseColor, headFontStack, baseFontSize } from '../../../constants/theme';

export const ItemContainer = styled.figure`
  ${MEDIA.TABLET`
    padding-bottom: 1.6rem;
  `};
`;

export const Date = styled.p`
  color: ${baseColor};
  font-size: 0.8rem;
  line-height: 1.2;
  font-weight: 400;
  font-family: ${headFontStack};
  text-decoration-style: none;
  margin: 0.5rem 0 0 0;
`;

export const Title = styled.h2`
  color: ${baseColor};
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: 700;
  text-decoration-style: none;
  margin: 1.5rem 0 0.5rem 0;
  ${MEDIA.TABLET`
    margin-top: 1rem;
  `};
`;

export const Copy = styled.p`
  color: ${baseColor};
  font-style: italic;
  font-size: 0.8rem;
  line-height: 1.5;
  text-decoration-style: none;
  margin: 1rem 0;
  ${MEDIA.TABLET`
    margin-top: 0.8rem;
  `};
`;
