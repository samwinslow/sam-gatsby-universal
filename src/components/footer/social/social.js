import React from 'react';
import { Link } from 'gatsby';
import { Container } from './social.css';
import { baseColor, headFontStack } from '../../../constants/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const linkStyle = {
  color: baseColor,
  fontFamily: headFontStack,
};

const Social = () => (
  <Container>
    <ul>
      <li>
        <a href="https://www.linkedin.com/in/samuel-winslow-b4a76084/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/sambwinslow" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/samscalligraphy/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </li>
      <li>
        <a href="http://github.com/samwinslow/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </li>
    </ul>
  </Container>
);

export default Social;
