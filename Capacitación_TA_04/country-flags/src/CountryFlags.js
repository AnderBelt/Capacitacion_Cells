import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CountryFlags-styles.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/bbva-web-form-field/';
import { flags } from '@bbva-web-components/bbva-web-clip-flag';
import '@bbva-web-components/bbva-web-clip-flag/bbva-web-clip-flag.js';
import '@bbva-web-components/bbva-form-field/bbva-form-field';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<country-flags></country-flags>
```

##styling-doc


@customElement country-flags
*/

const es = flags.flagsEs(); // flags:es
const mx = flags.flagsMx(); // flags:mx
const pe = flags.flagsPe(); // flags:pe
const ar = flags.flagsAr(); // flags:ar
const br = flags.flagsBr(); // flags:br

export class CountryFlags extends LitElement {
  static get is() {
    return 'country-flags';
  }

  // Declare properties
  static get properties() {
    return {
      flag: { type: String, },
      listCountries: {type: Array},
      listFlags:{type : Array}
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.flag = 'Espana';
    this.listCountries = ['Espana','Mexico','Peru','Argentina','Brasil'];
    this.listFlags = ['flags:es','flags:mx','flags:pe','flags:ar','flags:br'];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('country-flags-shared-styles')
    ];
  }

  _actionFlags(){
    
    let formName = this.shadowRoot.querySelector('bbva-form-field');
    let iconFlag = this.shadowRoot.querySelector('bbva-web-clip-flag');
  

    var nameCountry = formName.value;
    var nameAbr = '';

    var i = this.listCountries.indexOf(nameCountry);

    nameAbr = this.listFlags[i];

    iconFlag.setAttribute('icon',nameAbr);

    this.dispatchEvent(new CustomEvent('flags-event', {
      bubbles: true,
      composed: true,
      detail: {"Pais" : nameCountry },
    }
    ))

    

  }

  // Define a template
  render() {
    return html`
    <div class="container-total"> 
      <div class="buttonF">
        <bbva-web-button-default @click="${this._actionFlags}">Mostrar Bandera</bbva-web-button-default>
      </div>
      <div class="field-text">
        <bbva-form-field label="Ingrese el nombre del país" value="${this.flag}" required=""></bbva-form-field>
      </div>
      <div class="countries">
        <bbva-web-clip-flag icon=''></bbva-web-clip-flag>
      </div>
    </div>
    `;
  }
}
