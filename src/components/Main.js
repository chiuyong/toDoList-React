import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
  };

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  render () {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form action="#" className="form">
          <input
            type="text"
            onChange={this.handleInputChange}
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    );
  }
}
