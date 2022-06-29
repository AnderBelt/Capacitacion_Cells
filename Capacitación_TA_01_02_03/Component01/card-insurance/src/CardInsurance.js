import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CardInsurance-styles.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js'
import '@bbva-web-components/bbva-core-icon/bbva-core-icon.js'
import * as ICONS from '@bbva-web-components/bbva-foundations-icons';
import '@bbva-web-components/bbva-foundations-icons/bbva-foundations-icons.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<card-insurance></card-insurance>
```

##styling-doc

@customElement card-insurance
*/

ICONS.bbvaBullet();

export class CardInsurance extends LitElement {
  static get is() {
    return 'card-insurance';
  }
  
  // Declare properties
  static get properties() {
    return {
      title: { type: String,},
      description: {type: String,},
      listInfo: {type: Array, attribute: 'list-info'},
      buttonName: {type: String, attribute: 'button-name'}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.listInfo = [
      {
      icon: '', 
      description: ''
      },
      ];
    this.buttonName= '';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('card-insurance-shared-styles')
    ];
    
  }

  actionInsurance(){
    this.dispatchEvent(new CustomEvent('name-insurance-event', {
      bubbles: true,
      composed: true,
      detail: this.title,
    }))
  }



  // Define a template
  render() {
    return html`
    <div class="seguro">
      <h1>${this.title}</h1>
      <p>${this.description}</p>
      <div class="listB">
      ${this.listInfo.map((i) =>
        html`
          <div class="listB">
            <bbva-core-icon icon='bbva:${i.icon}'>
            </bbva-core-icon>${i.description}
          </div>
        `
        )}
      </div>
      <div class="buttonQ">
        <bbva-button-default  text="${this.buttonName}" @click="${this.actionInsurance}">
        </bbva-button-default>
      </div>
    </div>
    `;
  }
}
