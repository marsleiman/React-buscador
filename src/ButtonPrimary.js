import PropTypes from 'prop-types';
import React from 'react';

// Component funcional version 1
const ButtonPrimary = ({ level, mostrarEnPantalla, text }) => (
  <button
    className={`btn btn-${level}`}
    onClick={() => mostrarEnPantalla(level)}>
    {text}
  </button>
);

export default ButtonPrimary;

ButtonPrimary.defaultProps = {
  level: 'secondary',
};

ButtonPrimary.propTypes = {
  level: PropTypes.string,
  mostrarEnPantalla: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

// Componente funcional version 2
// export default function ButtonPrimary({ level, mostrarEnPantalla, text }) {
//   return (
//     <button
//       className={`btn btn-${level}`}
//       onClick={() => mostrarEnPantalla(level)}>
//       {text}
//     </button>
//   );
// }
