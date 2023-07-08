import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tasks.css';

export default function Tasks({ tasks, handleDelete, handleEdit }) {
  return (
    <ul className="tasks">
      {tasks.map((task, i) => (
        <li key={i}>
          {task}
          <span>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, i)} />
            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, i)}
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
