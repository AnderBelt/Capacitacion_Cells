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

.info-customer {
  background-color: #E9E9E9;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.title-info {
  margin-left: 15px;
}

.name-customer {
  margin-left: 15px;
  margin-right: 10%;
}

.number-customer {
  display: flex;
  margin-left: 15px;
  margin-right: 10%;
}

.teleph-number {
  width: 48%;
  margin-right: 4%;
}

.operator-info {
  width: 48%;
}

.parraf-confirm {
  margin-left: 15px;
  margin-top: 10px;
}

bbva-button-default {
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 15px;
}

.email-customer {
  margin-left: 15px;
  margin-right: 10%;
}

.line-sep {
  background-color: #D3D3D3;
  width: 80%;
  height: 3px;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 10%;
}
`;