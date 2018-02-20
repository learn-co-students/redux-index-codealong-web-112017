import React, { Component } from 'react';

class Todo extends Component {

  render() {
    return(
      <div>
        <li key={this.props.index}>{this.props.text}</li>
      </div>
    );
  }
};

export default Todo;
