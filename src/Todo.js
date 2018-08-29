import React from 'react';

export default function Todo(props) {
  const { userId, id, title, completed } = props.todo;

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>{userId}</td>
      <td>{title}</td>
      <td>{completed ? 'Yes' : 'No'}</td>
    </tr>
  );
}