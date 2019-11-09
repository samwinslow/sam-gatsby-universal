import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  padding: 0;
  margin: 2rem 0;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
