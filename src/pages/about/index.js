import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import Img from 'gatsby-image';
import WorkplaceItems from 'components/workplace-items';
import moment from 'moment';
import { graphql, Link } from 'gatsby';

const workplaceItems = [
  {
    id: 0,
    companyName: 'Tunestack',
    companyURL: '',
    jobTitle: 'Founder & CEO',
    dateStart: '2020-01-01',
    dateEnd: '2020-09-01',
  },
  {
    id: 1,
    companyName: 'Showcase Jobs',
    companyURL: '',
    jobTitle: 'Head of Growth',
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

const tempH2Style = {
  marginBottom: '1rem',
}
const tempH4Style = {
  margin: '0',
}
const tempLiStyle = {
  listStyleType: 'none',
  padding: '0',
  margin: '0.5rem 0 0.25rem 0',
}

const About = (/*{ data }*/) => (
  <Layout active="/about">
    <Box>
      <Title as="h2">
      About
      </Title>
      <p>
        I am a student at NYU, studying Media, Culture, and Communication with a concentration in Technology and Social Processes. It is a liberal arts program, so I study the cultural impact of technology from a theoretical perspective.
      </p>
      <p>
        I learn by doing, and I get the most satisfaction out of building systems — whether it’s a visual language, as in my design projects, or the tech stack of a mobile app, as with Tunestack. <a href="/code/no-degree">I do not have a CS degree</a>.
      </p>
      <p>
        Get in touch on <a href="https://twitter.com/sambwinslow">Twitter</a>.
      </p>

      <hr />

      <h2 style={tempH2Style}>Work Experience <span role="img" aria-label="">👨‍💻</span></h2>
      <ul>
        <li style={tempLiStyle}><small>{moment(workplaceItems[0].dateStart).format('MMM YYYY')} – {workplaceItems[0].dateEnd? moment(workplaceItems[0].dateEnd).format('MMM YYYY') : 'Present'}</small><br /> <h4 style={tempH4Style}>{workplaceItems[0].companyName}</h4>{workplaceItems[0].jobTitle}</li>
        <li style={tempLiStyle}><small>{moment(workplaceItems[1].dateStart).format('MMM YYYY')} – {workplaceItems[1].dateEnd? moment(workplaceItems[1].dateEnd).format('MMM YYYY') : 'Present'}</small><br /> <h4 style={tempH4Style}>{workplaceItems[1].companyName}</h4>{workplaceItems[1].jobTitle}</li>
        <li style={tempLiStyle}><small>{moment(workplaceItems[2].dateStart).format('MMM YYYY')} – {workplaceItems[2].dateEnd? moment(workplaceItems[2].dateEnd).format('MMM YYYY') : 'Present'}</small><br /> <h4 style={tempH4Style}>{workplaceItems[2].companyName}</h4>{workplaceItems[2].jobTitle}</li>
        <li style={tempLiStyle}><small>{moment(workplaceItems[3].dateStart).format('MMM YYYY')} – {workplaceItems[3].dateEnd? moment(workplaceItems[3].dateEnd).format('MMM YYYY') : 'Present'}</small><br /> <h4 style={tempH4Style}>{workplaceItems[3].companyName}</h4>{workplaceItems[3].jobTitle}</li>
      </ul>

      <h2 style={tempH2Style}>Education <span role="img" aria-label="">🎓</span></h2>
      <ul>
        <li style={tempLiStyle}><small>{moment(educationItems[0].dateStart).format('MMM YYYY')} – {educationItems[0].dateEnd? moment(educationItems[0].dateEnd).format('MMM YYYY') : 'Present'}</small><br /> <h4 style={tempH4Style}>{educationItems[0].companyName}</h4>{educationItems[0].jobTitle}</li>
        <li style={tempLiStyle}><small>{moment(educationItems[1].dateStart).format('MMM YYYY')} – {educationItems[1].dateEnd? moment(educationItems[1].dateEnd).format('MMM YYYY') : 'Present'}</small><br /> <h4 style={tempH4Style}>{educationItems[1].companyName}</h4>{educationItems[1].jobTitle}</li>
      </ul>

      <hr />

      <p>
        <i>Headline typography is set in Tablet Gothic Wide, and body copy in Sirba. I built this site using Gatsby.js, which runs on React.</i>
      </p>

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
