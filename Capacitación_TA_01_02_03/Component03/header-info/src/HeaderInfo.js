import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './HeaderInfo-styles.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js'
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js'
import * as ICONS from '@bbva-web-components/bbva-foundations-icons';
import '@bbva-web-components/bbva-foundations-icons/bbva-foundations-icons.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<header-info></header-info>
```

##styling-doc

@customElement header-info
*/
ICONS.bbvaAddnotes();
ICONS.bbvaHistory();



export class HeaderInfo extends LitElement {
  static get is() {
    return 'header-info';
  }

  // Declare properties
  static get properties() {
    return {
      title: {tyoe: String},
      nameCustomer: { type: String, },
      dni: {type: String}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = '';
    this.nameCustomer = '';
    this.dni = '';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('header-info-shared-styles')
    ];
  }

  actionQuotation(){
    this.dispatchEvent(new CustomEvent('new-quotation', {
      bubbles: true,
      composed: true,
      detail: { name: this.nameCustomer, dni: this.dni },
    }))
  }

  actionHistory(){
    this.dispatchEvent(new CustomEvent('history-quotation', {
      bubbles: true,
      composed: true,
      detail: {tittle: this.title},
    }))
  }

  // Define a template
  render() {
    return html`
    <div class="seguro">
    <h1>${this.title}</h1>   
      <div class="content-space">

        <div class="client-data">
        <div class="client-name">
         <p>${this.nameCustomer.toUpperCase()}</p>
        </div>
          <div class= "client-dni">
              <p>DNI: ${this.dni}</p>
          </div>
        </div>
        <div class= "buttons-insurance">
          <bbva-core-icon icon='bbva:addnotes'>
          </bbva-core-icon><bbva-button-default
            class="link"
            text="Nueva Cotización" @click="${this.actionQuotation}">
          </bbva-button-default>
          <br>
          <bbva-core-icon icon='bbva:history'>
          </bbva-core-icon><bbva-button-default
          class="link"
          text="Historial de Cotizaciones" @click="${this.actionHistory}">
          </bbva-button-default>
        </div>
      </div>
    </div>      
    `;
  }
}
