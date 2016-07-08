/* eslint-disable import/no-unresolved */
import React from 'react';
import Label from './Label';
import InputName from '../containers/inputs/InputName';
import InputSurname from '../containers/inputs/InputSurname';
import InputAddress from '../containers/inputs/InputAddress';
import LabelContainer from '../containers/LabelContainer';
import PlayButton from '../containers/buttons/PlayButton';
import ClearButton from '../containers/buttons/ClearButton';
/* eslint-enable import/no-unresolved */

export default () => (
  <div>
    <p>Write your data and click play.</p>
    <InputName label="Name: " />
    <InputSurname label="Surname: " />
    <InputAddress label="Address: " />
    <Label text="Name: " />
    <LabelContainer />
    <br />
    <PlayButton text="Play!" />
    <ClearButton text="Clear History" />
  </div>
);
