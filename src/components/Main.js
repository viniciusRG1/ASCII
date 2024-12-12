import React, {Component} from "react";

import './Main.css'

import Tarefa from "./Tarefas";

import Form from './Form';

export default class Main extends Component{

  state = {
    novaTarefa: '',
    tarefa:[
    ],
    index: -1,
  };

  componentDidMount(){
    const tarefa = JSON.parse(localStorage.getItem('tarefa'));
    if(!tarefa) return;

    this.setState({tarefa});
  }

  componentDidUpdate(precProps, prevState){
    const{tarefa} = this.state;
    if(tarefa === prevState.tarefa)return;

    localStorage.setItem('tarefa', JSON.stringify(tarefa));
  }

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
        <Form
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          novaTarefa={novaTarefa}
        />

      <Tarefa
        tarefa={tarefa}
        handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
      />

      </div>
    );
  }


}
