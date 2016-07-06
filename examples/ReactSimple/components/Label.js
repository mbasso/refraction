/* eslint-disable import/no-unresolved */
import React from 'react';
/* eslint-enable import/no-unresolved */

export default class extends React.Component {

  static propTypes = {
    text: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    text: '',
  }

  render() {
    const { text, ...others } = this.props;
    return (
      <p {...others} >{text}</p>
    );
  }
}
