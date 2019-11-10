import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { baseColor, baseFontStack, headFontStack } from '../constants/theme';

export const PostDate = styled.p`
  color: ${baseColor};
  font-size: 0.9rem;
  line-height: 1.2;
  font-weight: 400;
  font-family: ${headFontStack};
  margin: 0 0 3rem 0;
  text-decoration-style: none;
`;
