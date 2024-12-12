import React, {Component} from "react";

import './Main.css'

import {MdEdit} from 'react-icons/md'

import { FaDeleteLeft } from "react-icons/fa6";

import {GoPlus} from 'react-icons/go'

export default class Main extends Component{

  state = {
    novaTarefa: '',
    tarefa:[
    ],
    index: -1,
  };

  handleEdit = (e, index) => {
    const {tarefa,} = this.state;
    this.setState({
      index,
      novaTarefa: tarefa[index],
    });
  }

  handleDelete = (e, index) => {
    const {tarefa} = this.state;
    const novasTarefa = [...tarefa];
    novasTarefa.splice(index, 1);
    this.setState({
      tarefa:[...novasTarefa],
    });
  }

  handleChange = (e) =>{
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {tarefa, index} = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim();

    if(tarefa.indexOf(novaTarefa) !== -1);
    const novasTarefa = [...tarefa];

    if(index === -1){
      this.setState({
        tarefa:[...novasTarefa, novaTarefa],
        novaTarefa: '',
      });
    }else{
      novasTarefa[index] = novaTarefa;
      this.setState({
        tarefa:[...novasTarefa],
        index:-1,
      });
    }

  }
  render(){
    const {novaTarefa, tarefa} = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>
        <form action="#"
        className="form"
        onSubmit={this.handleSubmit}
        >
          <input onChange={this.handleChange}
          type="text"
          value={novaTarefa}
          />
          <button type="submit">
            <GoPlus />
            </button>
        </form>
        <ul className="tarefas">
          {tarefa.map((tarefa, index) => (
            <li key={tarefa}>{tarefa}
              <span>
                <MdEdit
                onClick={(e) => this.handleEdit(e, index)}
                className="edit" />
                <FaDeleteLeft
                onClick={(e) => this.handleDelete(e, index)}
                className="delete"/>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }


}
