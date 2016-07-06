/* eslint-disable import/no-unresolved */
import React from 'react';
import InputContainer from '../containers/InputContainer';
import LabelContainer from '../containers/LabelContainer';
import PlayButton from '../containers/PlayButton';
/* eslint-enable import/no-unresolved */

export default () => (
  <div>
    <p>Write something in the input field and then Click the button</p>
    <InputContainer />
    <LabelContainer />
    <PlayButton />
  </div>
);
