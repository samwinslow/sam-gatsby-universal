import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import Details from 'components/details';
import Img from 'gatsby-image';
import WorkplaceItems from 'components/workplace-items';
import moment from 'moment';
import { graphql, Link } from 'gatsby';

const workplaceItems = [
  {
    id: 0,
    companyName: 'Baedeker Travel Magazine (NYU)',
    companyURL: 'http://nyubaedeker.com/',
    jobTitle: 'Editor-in-Chief & Creative Director',
    dateStart: '2017-09-01',
    dateEnd: '',
  },
  {
    id: 1,
    companyName: 'Showcase Jobs',
    companyURL: '',
    jobTitle: 'Marketing & Communications Lead',
    dateStart: '2019-04-29',
    dateEnd: '2019-10-30',
  },
  {
    id: 2,
    companyName: 'Sagmeister & Walsh',
    companyURL: 'https://sagmeisterwalsh.com/',
    jobTitle: 'Intern',
    dateStart: '2019-01-01',
    dateEnd: '2019-02-08',
  },
  {
    id: 3,
    companyName: 'Simmer Group',
    companyURL: 'https://www.simmergroup.com/',
    jobTitle: 'Graphic Design Intern',
    dateStart: '2019-05-30',
    dateEnd: '2019-09-01',
  }
];
const educationItems = [
  {
    id: 0,
    companyName: 'New York University',
    companyURL: '',
    jobTitle: 'B.S., Media, Culture, & Communication',
    dateStart: '2017-09-01',
    dateEnd: '2020-12-15',
  },
  {
    id: 1,
    companyName: 'Gunn High School (Palo Alto, California)',
    companyURL: '',
    jobTitle: '',
    dateStart: '2013-09-01',
    dateEnd: '2017-06-01',
  },
];

const tempH4Style = {
  margin: '0',
}
const tempLiStyle = {
  listStyleType: 'none',
  padding: '0',
  margin: '0.5rem 0 0.25rem 0',
}

const SydneySolon = ({ data }) => (
  <Layout active="/about">
    <Box>
      <Title as="h2">
      Something for Someone Super Special
      </Title>

      <hr />

      <Details>
        <summary>
          You are the cheese <span role="img" aria-label="">🧀</span> on my bagel
        </summary>
        <Img fixed={data.cheese.childImageSharp.fixed}/>
        
      </Details>
      <Details>
        <summary>
          &amp; with you I am never hungies.
          <span role="img" aria-label="">&nbsp;😋</span> 
        </summary>
        <Img fixed={data.hungies.childImageSharp.fixed}/>
        
      </Details>
      <Details>
        <summary>
          Even though you’re very fit
          <span role="img" aria-label="">&nbsp;🏋🏻‍♀️</span> 
        </summary>
        <Img fixed={data.fit.childImageSharp.fixed}/>
        
      </Details>
      <Details>
        <summary>
          you remain
          <span role="img" aria-label="">&nbsp;👻&nbsp;</span> 
          formless.
        </summary>
        <Img fixed={data.formless.childImageSharp.fixed}/>
        
      </Details>
      <Details>
        <summary>
          I try to be as
          <span role="img" aria-label="">&nbsp;📚&nbsp;</span>
          well-read as you
        </summary>
        <Img fixed={data.studious.childImageSharp.fixed}/>
        
      </Details>
      <Details>
        <summary>
          <span role="img" aria-label="">🗿&nbsp;</span>
          but I just can’t sit still.
        </summary>
        <Img fixed={data.sitStill.childImageSharp.fixed}/>
        
      </Details>
      <Details>
        <summary>
          You’re cultured
          <span role="img" aria-label="">&nbsp;🏛&nbsp;</span>
          but still weird
        </summary>
        <Img fixed={data.cultured.childImageSharp.fixed}/>
        
      </Details>
      <Details>
        <summary>
          You’re calm
          <span role="img" aria-label="">&nbsp;🌴&nbsp;</span>
          when I’m aggro
          <span role="img" aria-label="">&nbsp;🤬</span>
        </summary>
        <Img fixed={data.aggro.childImageSharp.fixed}/>
        
      </Details>
      <Details>
        <summary>
          You’re a bit two-faced
          <span role="img" aria-label="">&nbsp;😬</span>
        </summary>
        <Img fixed={data.twoFaced.childImageSharp.fixed}/>
        
      </Details>
      <Details>
        <summary>
          <span role="img" aria-label="">🤝&nbsp;</span>
          but also patient and kind.
        </summary>
        <Img fixed={data.patient.childImageSharp.fixed}/>
        
      </Details>

      <h2>
        How did I get so lucky?
      </h2>

    </Box>
  </Layout>
);

/*About.propTypes = {
  data: PropTypes.object.isRequired,
};*/

export default SydneySolon;

export const query = graphql`
  query SydneySolonQuery {
    profileImage: file(relativePath: {eq: "images/prof-vested.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    hungies: file(relativePath: {eq: "images/sydney/hungies.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    cheese: file(relativePath: {eq: "images/sydney/cheese.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    fit: file(relativePath: {eq: "images/sydney/fit.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    patient: file(relativePath: {eq: "images/sydney/patient.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    formless: file(relativePath: {eq: "images/sydney/formless.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    aggro: file(relativePath: {eq: "images/sydney/aggro.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    cultured: file(relativePath: {eq: "images/sydney/cultured.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    studious: file(relativePath: {eq: "images/sydney/studious.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    twoFaced: file(relativePath: {eq: "images/sydney/twoFaced.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
    sitStill: file(relativePath: {eq: "images/sydney/sitStill.jpg" }) {
      childImageSharp {
        fixed(width: 700, height: 700) {
          ...GatsbyImageSharpFixed
        }
      }
    },
  }
`

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
