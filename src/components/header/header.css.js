import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  a {
    text-decoration: none;
  }
  ${MEDIA.PHONE`
    justify-content: center;
  `};
`;
