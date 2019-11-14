import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 0;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;

export const Items = styled.div`
  li {
    margin: 0.5rem 0;
    padding: 0;
    list-style-type: none;
  }
`;
