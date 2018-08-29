import PropTypes from 'prop-types';
import React from 'react';

import ItemCard from './ItemCard';

export default function ItemCards({ items }) {
  return (
    items.map(item => <ItemCard
      key={item.title}
      description={item.description}
      title={item.title}
    />)
  );
}

ItemCards.propTypes = {
  items: PropTypes.array.isRequired,
};

