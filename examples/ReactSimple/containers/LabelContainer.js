/* eslint-disable import/no-unresolved */
import Label from '../components/Label';
import { connect } from 'refraction-react';
/* eslint-enable import/no-unresolved */

export default connect({
  subscriptions: {
    onNameChange: ({ payload }) => ({ text: payload }),
  },
})(Label);
