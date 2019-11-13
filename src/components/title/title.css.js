import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled.h1`
  display: block;
  margin: ${({ leader }) => () => {
    if (leader) {
      return '2rem 0 4rem 0';
    } else {
      return '0 0 2rem 0';
    }
  }};
  font-weight: 300;
  font-size: 3rem;
  line-height: 1.1;

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;
