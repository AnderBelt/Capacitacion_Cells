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

.container-options {
  background-color: #E9E9E9;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.text-container {
  margin-top: 15px;
  margin-left: 15px;
}

bbva-web-form-checkbox {
  margin-left: 15px;
  margin-bottom: 10px;
}

.list-options {
  margin-top: 15px;
}

.title-container {
  margin-left: 15px;
}
`;