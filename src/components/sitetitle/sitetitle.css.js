import styled from 'styled-components';
import { headFontStack } from '../../constants/theme';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.span`
  font-family: ${headFontStack};
  font-size: 1rem;
  letter-spacing: 0.01rem;
  font-weight: 900;
  text-transform: uppercase;
`;
