import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const containerMaxWidth = '700px';
const containerFluidMaxWidth = '1170px';
const imageOverrides = `
  h3 {
    max-width: ${containerMaxWidth};
  }

  .gatsby-resp-image-wrapper {
    max-width: 100% !important;
  }

  img {
    max-width: 100% !important;
    width: 100%;
  }

  ul {
    list-style-type: none !important;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${MEDIA.PHONE`
      grid-template-columns: repeat(1, 1fr);
    `};
    grid-gap: 2rem;
    padding: 0;
    margin: 2rem 0;

    li {
      margin: 0;
      padding: 0;

      p {
        margin: 0;
      }
    }
  }
`;

export const Container = styled.div`
  padding: 2rem;
  max-width: ${containerMaxWidth};
  margin: 0 auto;
`;

export const ContainerFluid = styled.div`
  padding: 2rem;
  max-width: ${containerFluidMaxWidth};
  margin: 0 auto;

  ${imageOverrides}

  p {
    max-width: ${containerMaxWidth};
  }
`;

export const ContainerFullwidth = styled.div`
  padding: 2rem;
  margin: 0 auto;
  
  ${imageOverrides}
`;
