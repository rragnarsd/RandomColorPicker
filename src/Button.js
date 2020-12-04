import React from 'react';
import './App.css';

export class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={this.props.light ? 'light-btn' : 'dark-btn'}
      >
        Refresh
      </button>
    );
  }
}
