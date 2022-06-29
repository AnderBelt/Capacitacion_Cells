import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CheckboxButton-styles.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js'
import '@bbva-web-components/bbva-web-form-checkbox/bbva-web-form-checkbox.js'

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<checkbox-button></checkbox-button>
```

##styling-doc

@customElement checkbox-button
*/
export class CheckboxButton extends LitElement {
  static get is() {
    return 'checkbox-button';
  }

  // Declare properties
  static get properties() {
    return {
      listItems: { type: Array, },
      //disabledForm: {type: Boolean},
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.listItems = [{
      'number' : '1',
      'item' :'Seguro Vehicular'}, 
      {
      'number' : '2',
      'item' :'Seguro de Vida'},
      {
        'number' : '3',
        'item' :'Seguro Familiar'},];
    //this.disabledForm = true;
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('checkbox-button-shared-styles')
    ];
  }

  _actionShowButton(){
    
    let boxes = this.shadowRoot.querySelectorAll('bbva-web-form-checkbox');
    let buttonO = this.shadowRoot.querySelector('bbva-web-button-default');
    var status = 'true';

    boxes.forEach((item) => {

      if(item.getAttribute('aria-checked') == 'false'){
        status = 'false';
      }

    })

    if(status=='true'){
      buttonO.removeAttribute('disabled');

    } else {
      buttonO.setAttribute('disabled', 'true');
    }
  }

  _actionShowOptions(){

    var options = ( this.listItems.map((i) => i.item ) );

    this.dispatchEvent(new CustomEvent('check-event', {
      bubbles: true,
      composed: true,
      detail: { 'Options': options },
    }))

  }

  // Define a template
  render() {
    return html`
      <div class="check-button-total">
      <div id="checks-items" class="checks-items">
          ${this.listItems.map((i) =>
            html`
              <bbva-web-form-checkbox id="item${i.number}" name="choice${i.number}" value="${i.number}" @click="${this._actionShowButton}">
              ${i.item}</bbva-web-form-checkbox>
            `
            )}  
      </div>

      <div class="check-button">
          <bbva-web-button-default id='buttonO' @click="${this._actionShowOptions}" disabled>New Button</bbva-web-button-default>
      </div>
      </div>
    `;
  }
}
