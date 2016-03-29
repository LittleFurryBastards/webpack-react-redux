import React from 'react';

export default class Anchor extends React.Component {
  render() {
    return (
      <a href={this.props.link}>{this.props.text}</a>
    )
  }
}
