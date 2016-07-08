/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import Rx from 'rx';
import refraction from './refraction/';
/* eslint-enable import/no-unresolved */

(() => {
  const setButton = (name, action) => {
    const button = document.getElementById(name);
    button.onclick = refraction[action];
  };

  const setInput = (name, subscription) => {
    const input = document.getElementById(name);
    input[subscription] = ({ payload }) => {
      input.value = payload;
    };
    refraction.subscribe(input);

    Rx.Observable
      .fromEvent(input, 'keydown')
      .debounce(500)
      .subscribe(refraction[subscription]);
  };

  setInput('name', 'onNameChange');
  setInput('surname', 'onSurnameChange');
  setInput('address', 'onAddressChange');

  setButton('playButton', 'play');
  setButton('clearButton', 'clear');

  const label = document.getElementById('label');
  label.onNameChange = ({ payload }) => {
    label.innerHTML = payload;
  };
  refraction.subscribe(label);
})();
