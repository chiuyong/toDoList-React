import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tasks
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    editIndex: -1,
  };

  handleInputChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tasks, editIndex } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();
    if (tasks.indexOf(newTask) !== -1) return;
    const newTasks = [...tasks];
    if (editIndex === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[editIndex] = newTask;
      this.setState({
        tasks: [...newTasks],
        newTask: '',
        editIndex: -1,
      });
    }
  };

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    this.setState({
      tasks: [...newTasks],
    });
  };

  handleEdit = (e, index) => {
    const { tasks } = this.state;
    this.setState({
      editIndex: index,
      newTask: tasks[index],
    });
  };

  render() {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>
        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            type="text"
            onChange={this.handleInputChange}
            value={newTask}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
        <ul className="tasks">
          {tasks.map((task, i) => (
            <li key={i}>
              {task}
              <span>
                <FaEdit
                  className="edit"
                  onClick={(e) => this.handleEdit(e, i)}
                />
                <FaWindowClose
                  className="delete"
                  onClick={(e) => this.handleDelete(e, i)}
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
