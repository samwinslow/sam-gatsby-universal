import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.h2`
  font-size: 1.5rem;
  line-height: 1;
  font-weight: 500;
  margin: 1rem 0;
  text-decoration-style: none;
`;

export const Copy = styled.p`
  color: #757575;
  margin: 0 2rem 2rem;
  text-decoration-style: none;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;
