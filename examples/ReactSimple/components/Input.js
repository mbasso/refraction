/* eslint-disable import/no-unresolved */
import React from 'react';
import Label from './Label';
/* eslint-enable import/no-unresolved */

export default class Input extends React.Component {

  static propTypes = {
    value: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
  }

  static defaultProps = {
    value: '',
  }

  render() {
    const { label, ...others } = this.props;
    return (
      <div>
        <Label text={label} />
        <input style={{ marginLeft: 8 }} {...others} />
      </div>
    );
  }
}
