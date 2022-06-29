import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaDataInfoCustomer-styles.js';
import '@bbva-web-components/bbva-button-default/bbva-button-default.js';
import '@bbva-web-components/bbva-form-field/bbva-form-field.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-option.js';


/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-data-info-customer></bbva-data-info-customer>
```

##styling-doc

@customElement bbva-data-info-customer
*/
export class BbvaDataInfoCustomer extends LitElement {
  static get is() {
    return 'bbva-data-info-customer';
  }

  // Declare properties
  static get properties() {
    return {
      numberCustomer: { type: Array, },
      emailCustomer: {type:Array},
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.numberCustomer = ['985452478','963852741','951753486'];
    this.emailCustomer = ['marquis@gmail.com','andbel@gmail.com','tuias@gmail.com']
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-data-info-customer-shared-styles')
    ];
  }

  _actionShowTelephone(){
    
    let numberT = this.shadowRoot.querySelector('#numberTel')
    let numberT2 = numberT.querySelector('select')
    let numberT3 = numberT2.querySelector('option')
    let numberTelef = numberT3.getAttribute('value')
    
    let operatorT = this.shadowRoot.querySelector('#opInfo');

    this.dispatchEvent(new CustomEvent('number-event', {
      bubbles: true,
      composed: true,
      detail: { 'Numero' : numberTelef, 'Operador' : operatorT.value },
    }))
  }

  _actionShowEmail(){
    let email = this.shadowRoot.querySelector('#email-customer')
    let email2 = email.querySelector('select')
    let email3 = email2.querySelector('option')
    let emailCustom = email3.getAttribute('value')

    this.dispatchEvent(new CustomEvent('email-event', {
      bubbles: true,
      composed: true,
      detail: { 'Email' : emailCustom},
    }))

  }

  // Define a template
  render() {
    return html`
      <div class="info-customer">
        <br>
        <div class="title-info">
        <h2>Verifica los datos  del cliente</h2>
        </div>
        <div class="name-customer">
          <bbva-form-field label="Nombres y apellidos" required=""></bbva-form-field>
        </div>
        <div class="line-sep"></div>
        <div class="parraf-confirm"><p>Confirma si su teléfono y correo electrónico están activos (si no, actualízalos) </p>
        </div>
        <div class="number-customer">
          <div class="teleph-number">
            <bbva-web-form-select id="numberTel" label="Teléfono">
              ${this.numberCustomer.map((i) =>
                  html` <bbva-web-form-option value="${i}">${i}</bbva-web-form-option>`
                )}
            </bbva-web-form-select>
          </div>
          <div class="operator-info">
            <bbva-form-field label="Operador" id="opInfo" required=""></bbva-form-field>
          </div>
        </div>
        <bbva-button-default class="link" text="Agregar nuevo teléfono y operador" @click="${this._actionShowTelephone}">
        </bbva-button-default>
        <div class="email-customer">
        <bbva-web-form-select label="Correo Electrónico" id="email-customer">
          ${this.emailCustomer.map((i) =>
              html` <bbva-web-form-option value="${i}">${i}</bbva-web-form-option>`
            )}
        </bbva-web-form-select>
        </div>
        <bbva-button-default class="link" text="Agregar nuevo correo electrónico" @click="${this._actionShowEmail}">
        </bbva-button-default>
      </div>
    `;
  }
}
