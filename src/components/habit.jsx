import React, { Component } from 'react';

class Habit extends Component {
/*
  state = {
    count: 0,
  };
*/
  handleIncrement = () => {
    // state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야 함
    //this.setState({ count: this.state.count + 1 });

    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    // state 오브젝트 안에 있는 count를 감소 한뒤 state를 업데이트 해야 함
    //const count = this.state.count - 1;
    //this.setState({ count: count < 0 ? 0 : count }); // count가 0 이하인 경우 0으로 업데이트

    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
