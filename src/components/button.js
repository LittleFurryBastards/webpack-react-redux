import React from 'react';

export default class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.handleClick}>{this.props.text}</button>
    )
  }
}
