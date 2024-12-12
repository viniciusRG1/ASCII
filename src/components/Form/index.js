import React from "react";
import PropTypes from "prop-types";
import {GoPlus} from 'react-icons/go'

import './Form.css';

export default function Form({handleChange, handleSubmit, novaTarefa}){
  return(<form action="#"
    className="form"
    onSubmit={handleSubmit}
    >
      <input onChange={handleChange}
      type="text"
      value={novaTarefa}
      />
      <button type="submit">
        <GoPlus />
        </button>
    </form>
    );
}

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
