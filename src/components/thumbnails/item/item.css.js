import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { baseColor, mutedColor, headFontStack, baseFontSize } from '../../../constants/theme';

export const ItemContainer = styled.figure`
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding: 0 1rem;
  transition: background-color 0.2s ease;
  :first-child {
    border-top: 1px solid rgba(0,0,0,0.2);
  }
  :hover {
    background-color: rgba(0,0,0,0.05);
  }
  ${MEDIA.TABLET`
    padding-bottom: 1.6rem;
  `};
`;

export const Date = styled.p`
  color: ${mutedColor};
  font-size: 0.7rem;
  line-height: 1;
  font-weight: 400;
  font-family: ${headFontStack};
  text-decoration-style: none;
  margin: 0 0 0.5rem 0;
`;

export const Title = styled.h2`
  color: ${baseColor};
  font-size: 1.2rem;
  line-height: 1.2;
  font-weight: 600;
  text-decoration-style: none;
  margin: 1rem 0 0.5rem 0;
  max-width: 30rem;
  ${MEDIA.TABLET`
    margin-top: 1rem;
  `};
`;

export const Copy = styled.p`
  color: ${mutedColor};
  font-size: 0.8rem;
  line-height: 1.5;
  text-decoration-style: none;
  margin: 0 0 1rem 0;
  ${MEDIA.TABLET`
    margin-top: 0.8rem;
  `};
`;
