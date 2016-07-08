/* eslint-disable import/no-unresolved */
import React from 'react';
/* eslint-enable import/no-unresolved */

export default class Button extends React.Component {

  static propTypes = {
    text: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    text: '',
  }

  render() {
    const { text, ...others } = this.props;
    return (
      <button style={{ marginRight: '4px' }} {...others} >{text}</button>
    );
  }
}
