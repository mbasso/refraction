/* eslint-disable import/no-unresolved */
import Refraction from 'refraction';
import middlewares from './middlewares';
import play from 'refraction-player';
/* eslint-enable import/no-unresolved */

class Refract extends Refraction {

  onInputChange = (e) => {
    this.publish('onInputChange', {
      type: 'event',
      payload: e,
    });
  }

  play = () => {
    play({
      refraction: this,
      track: this.getHistory(),
    });
  }

}

export default new Refract(middlewares);
