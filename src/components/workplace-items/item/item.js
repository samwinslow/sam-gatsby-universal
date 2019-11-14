import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import GatsbyLink from 'gatsby-link';
import { Date, Title, Copy } from './item.css';
import moment from 'moment';

const WorkplaceItem = ({ item }) => (
<figure>
  <Date>
    {moment(item.dateStart).format('MMM YYYY')} – {item.dateEnd? moment(item.dateEnd).format('MMM YYYY') : 'Present'}
  </Date>
  <h3>
    <a href={item.companyURL}>{item.companyName}</a>
  </h3>
  {item.jobTitle}
</figure>
);

WorkplaceItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default WorkplaceItem;