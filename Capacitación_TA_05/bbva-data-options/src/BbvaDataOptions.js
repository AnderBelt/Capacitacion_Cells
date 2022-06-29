import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaDataOptions-styles.js';
import '@bbva-web-components/bbva-web-form-checkbox/bbva-web-form-checkbox.js'
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-data-options></bbva-data-options>
```

##styling-doc

@customElement bbva-data-options
*/
export class BbvaDataOptions extends LitElement {
  static get is() {
    return 'bbva-data-options';
  }

  // Declare properties
  static get properties() {
    return {
      listOptions: { type: Array, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.listOptions = [{
      'number' : '1', 
      'option' : 'Es de uso exclusivamente particular (no para servicio de taxi).'},
      {
      'number' : '2', 
      'option' : 'No tiene timón cambiado.'}];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-data-options-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="container-options">
        <div class="title-container"><h2>Valida las siguientes condiciones</h2></div>
        <div class="text-container">
        <p>Para cotizar y contratar este seguro confirma con el cliente las condiciones para su vehículo.</p></div>
        <div class='list-options'>
          ${this.listOptions.map((i) =>
              html`
                <bbva-web-form-checkbox value="${i.number}">
                ${i.option}</bbva-web-form-checkbox>
              `
              )}
        </div>
        <br>
      </div>
    `;
  }
}
