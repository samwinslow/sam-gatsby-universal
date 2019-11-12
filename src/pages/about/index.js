import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const About = (/*{ data }*/) => (
  <Layout>
    <Box>
      <Title as="h2">
      Me
      </Title>
      <p>Go placidly amid the noise and haste, and remember what peace there may be in silence. As far as possible without surrender be on good terms with all persons. Speak your truth quietly and clearly; and listen to others, even the dull and the ignorant; they too have their story.</p>
      {/*<Gallery data={data} />*/}
  {/* <Img fixed={data.file.childImageSharp.fixed} /> */}
    </Box>
  </Layout>
);

/*About.propTypes = {
  data: PropTypes.object.isRequired,
};*/

export default About;

// where is this file??
/*export const query = graphql`
  query {
    file(relativePath: { eq: "/prof-vested.jpg" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`*/
