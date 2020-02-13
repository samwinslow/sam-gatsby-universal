import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';
import { baseFontSize, baseFontStack, monoFontStack, accentColor, baseColor, baseLineHeight, headFontStack, baseFontURL } from '../../constants/theme';

export const DetailsWrapper = styled.details`
  user-select: none;
  summary {
    font-weight: 700;
    font-size: 2rem;
    font-family: ${headFontStack};
    line-height: 1.1;
    margin: 1rem 0;
    ::-webkit-details-marker {
      display: none;
    }
    :hover {
      cursor: pointer;
      opacity: 0.5;
    }
    :focus {
      outline: none;
    }
  }
  p {
    margin-top: 0.5rem;
  }
`;
