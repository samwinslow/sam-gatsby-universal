import React from 'react';
import PropTypes from 'prop-types';
import { Items } from './workplace-items.css';
import WorkplaceItem from './item'

const WorkplaceItems = ({ data }) => {
  const items = data;
  console.log(data);
  return(
  <Items>
    {items.map(item => (
      <WorkplaceItem 
        item={item}
        key=""
      />
    ))}
  </Items>
  );
};

WorkplaceItems.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default WorkplaceItems;
 