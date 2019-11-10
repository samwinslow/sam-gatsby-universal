import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      font-size: 1rem;

      & + li {
        margin-left: 1rem;
      }
    }
  }
`;
