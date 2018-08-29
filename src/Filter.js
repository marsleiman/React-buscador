import PropTypes from 'prop-types';
import React from 'react';

export default function Filter(props) {
  return (
    <input onChange={props.onChange} type="text" value={props.text} />
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
