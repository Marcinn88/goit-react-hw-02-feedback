import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  static defaultProps = {
    stat: { good: 0, neutral: 0, bad: 0 },
    total: 0,
  };
  static propTypes = {
    stat: PropTypes.object.isRequired,
    total: PropTypes.number,
  };

  render() {
    return (
      <div>
        <h2>Statistics</h2>
        <ul>
          {Object.entries(this.props.stat).map(([key, value]) => {
            return (
              <li>
                <span>{value}</span>
              </li>
              );
            })}
            <li>
              <span>Total: </span>
              <span>{this.props.total}</span>
            </li>
            <li>
              <span>Positive feedback: </span>
              <span>
                {this.props.positivePercentage}%
              </span>
            </li>
        </ul>
      </div>
    );
  }
}
