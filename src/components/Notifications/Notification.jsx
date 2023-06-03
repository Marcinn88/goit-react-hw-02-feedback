import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class Notification extends Component {
  static defaultProps = {
    message: ' ',
  };
  static propTypes = {
    Message: PropTypes.string,
  };
  render() {
    return (
      <h2>
        {this.props.message}
      </h2>
    );
  }
}
