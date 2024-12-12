import React from "react";

import {MdEdit} from 'react-icons/md'

import { FaDeleteLeft } from "react-icons/fa6";
import PropTypes from "prop-types";

import './Tarefa.css'

export default function Tarefa({tarefa, handleDelete, handleEdit}){
  return(
    <ul className="tarefas">
          {tarefa.map((tarefa, index) => (
            <li key={tarefa}>{tarefa}
              <span>
                <MdEdit
                onClick={(e) => handleEdit(e, index)}
                className="edit" />
                <FaDeleteLeft
                onClick={(e) => handleDelete(e, index)}
                className="delete"/>
              </span>
            </li>
          ))}
        </ul>
  );
}

Tarefa.prototype = {
  tarefa: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired
}
