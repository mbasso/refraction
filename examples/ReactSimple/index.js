/* eslint-disable import/no-unresolved */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'refraction-react';
import refraction from './refraction/';
import App from './components/App';
/* eslint-enable import/no-unresolved */

render(
  <Provider refraction={refraction}>
    <App />
  </Provider>,
  document.getElementById('root')
);
