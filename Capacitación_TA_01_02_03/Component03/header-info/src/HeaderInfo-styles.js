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

.seguro {
  padding: 5px;
  padding-left: 15px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.content-space {
  display: flex;
  flex-direction: row;
}

.client-data {
  display: flex;
  flex-direction: column;
}

.buttons-insurance {
  position: relative;
  float: right;
}

bbva-core-icon {
  color: var(--colorsPrimaryMedium, ${unsafeCSS(foundations.colors.primaryMedium)});
}

.client-dni {
  color: var(--colorsPrimaryMedium, ${unsafeCSS(foundations.colors.primaryMedium)});
}
`;