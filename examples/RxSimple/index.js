/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import Rx from 'rx';
import refraction from './refraction/';
/* eslint-enable import/no-unresolved */

(() => {
  const input = document.getElementById('input');
  input.onInputChange = ({ payload }) => {
    input.value = payload;
  };
  refraction.subscribe(input);

  const label = document.getElementById('label');
  label.onInputChange = ({ payload }) => {
    label.innerHTML = payload;
  };
  refraction.subscribe(label);

  const button = document.getElementById('button');
  button.onclick = refraction.play;

  Rx.Observable
    .fromEvent(input, 'keydown')
    .debounce(500)
    .subscribe(refraction.onInputChange);
})();
