import PropTypes from 'prop-types';
import React from 'react';

export default function ItemCard({ description, title }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

ItemCard.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
