/* eslint-disable import/no-unresolved */
import Input from '../components/Input';
import { connect } from 'refraction-react';
/* eslint-enable import/no-unresolved */

export default connect({
  actions: {
    onChange: 'onInputChange',
  },
  subscriptions: {
    // update his own value
    onInputChange: ({ payload }) => ({ value: payload }),
  },
})(Input);
