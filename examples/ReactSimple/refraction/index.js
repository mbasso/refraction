/* eslint-disable import/no-unresolved */
import Refraction from 'refraction';
import middlewares from './middlewares';
import play from 'refraction-player';
/* eslint-enable import/no-unresolved */

class Refract extends Refraction {

  onNameChange = (e) => {
    this.publishEvent(e, 'onNameChange');
  }

  onSurnameChange = (e) => {
    this.publishEvent(e, 'onSurnameChange');
  }

  onAddressChange = (e) => {
    this.publishEvent(e, 'onAddressChange');
  }

  publishEvent = (e, channel) => {
    this.publish(channel, {
      type: 'event',
      payload: e,
    });
  }

  play = () => {
    const track = [...this.getHistory()];

    // clear fields
    this.onNameChange('');
    this.onSurnameChange('');
    this.onAddressChange('');

    play({
      refraction: this,
      track,
    });
  }

  clear = () => {
    this.clearHistory();
  }

}

export default new Refract(middlewares);
