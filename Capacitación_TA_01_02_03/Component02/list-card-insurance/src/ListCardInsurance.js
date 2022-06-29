import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './ListCardInsurance-styles.js';
import "@capacitacion-practica/card-insurance/card-insurance.js"
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<list-card-insurance></list-card-insurance>
```

##styling-doc

@customElement list-card-insurance
*/
export class ListCardInsurance extends LitElement {
  static get is() {
    return 'list-card-insurance';
  }

  // Declare properties
  static get properties() {
    return {
      listCard: { type: Array, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.listCard = [
      {
      title: '', 
      description: '', 
      listInfo: [
        {
          icon: '', 
          description: ''
        },
      ], 
      buttonName: ''
    }
    ];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('list-card-insurance-shared-styles')
    ];
  }

  selectCard(e){
    console.log(e); 
    this.dispatchEvent(new CustomEvent('list-insurance-event', {
      bubbles: true,
      composed: true,
      detail: {
        title: e.detail,
      },
    }))
  }

  // Define a template
  render() {
    return html`
      <div class="seguro">
        <h1>Seguros para ofrecer al cliente: </h1>
        <div class="container-cards">
          ${this.listCard.map((i) => html `
          <card-insurance title="${i.title}" description="${i.description}" list-info="${JSON.stringify(i.listInfo)}" button-name="${i.buttonName}" @name-insurance-event="${this.selectCard}">

          </card-insurance>
          `)}
        </div>
      </div> 
    `;
  }
}
