import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { baseColor, baseFontStack, headFontStack } from '../../../constants/theme';

export const Date = styled.p`
  color: ${baseColor};
  font-size: 0.85rem;
  line-height: 1.2;
  font-weight: 400;
  font-family: ${headFontStack};
  margin: 1rem 0 0 0;
  text-decoration-style: none;
`;

export const Title = styled.h2`
  color: ${baseColor};
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 500;
  margin: 2rem 0 0.5rem 0;
  text-decoration-style: none;
`;

export const Copy = styled.p`
  color: ${baseColor};
  font-style: italic;
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 0;
  text-decoration-style: none;

  ${MEDIA.TABLET`
    
  `};
`;
