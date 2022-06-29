/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

bbva-web-form-select {
  --_info-message-icon-color: #5BBEFF;
}

.vehicle-container {
  background-color: #E9E9E9;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.title-container {
  margin-left: 5%;
  margin-right: 5%;
}

.search-container {
  margin-left: 5%;
  margin-right: 5%;
}

.check-container {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15px;
  margin-bottom: 20px;
}

.predictive-container {
  margin-left: 5%;
  margin-right: 5%;
}

#Marcastrue {
  pointer-events: none;
}

#Modelostrue {
  pointer-events: none;
}

bbva-web-form-predictive {
  margin-bottom: 15px;
}

.year-container {
  margin-left: 5%;
  margin-right: 5%;
}

.reference-val {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 15px;
  margin-bottom: 15px;
}

.radio-group {
  margin-left: 5%;
  margin-right: 5%;
}

bbva-form-radio-group {
  margin-bottom: 10px;
}
`;