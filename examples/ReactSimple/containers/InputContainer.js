/* eslint-disable import/no-unresolved */
import Input from '../components/Input';
import { connect } from 'refraction-react';
/* eslint-enable import/no-unresolved */

export default (changeEvent) => connect({
  actions: {
    onChange: changeEvent,
  },
  subscriptions: {
    // update his own value
    [changeEvent]: ({ payload }) => ({ value: payload }),
  },
})(Input);
