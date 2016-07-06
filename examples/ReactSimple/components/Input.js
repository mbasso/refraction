/* eslint-disable import/no-unresolved */
import React from 'react';
/* eslint-enable import/no-unresolved */

export default class extends React.Component {

  static propTypes = {
    value: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  render() {
    return (
      <input {...this.props} />
    );
  }
}
