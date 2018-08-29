import React from 'react';

class Numbers extends React.Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];

    return (
      <ul>
        {
          numbers.map(number => <li key={number}>{number}</li>)
        }
      </ul>
    );
  }
}

export default Numbers;