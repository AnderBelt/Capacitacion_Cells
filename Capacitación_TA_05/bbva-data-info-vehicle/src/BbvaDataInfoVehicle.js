import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './BbvaDataInfoVehicle-styles.js';
import '@bbva-web-components/bbva-form-field/bbva-form-field.js';
import '@bbva-web-components/bbva-web-form-predictive/bbva-web-form-predictive.js';
import '@bbva-web-components/bbva-web-form-search/bbva-web-form-search.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-option.js';
import '@bbva-web-components/bbva-web-form-select/bbva-web-form-select.js';
import '@bbva-web-components/bbva-web-form-checkbox/bbva-web-form-checkbox.js'
import '@bbva-web-components/bbva-web-form-radio-button/bbva-web-form-radio-button.js';
import '@bbva-web-components/bbva-form-radio-group/bbva-form-radio-group.js';
import '@bbva-web-components/bbva-form-radio-button/bbva-form-radio-button.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<bbva-data-info-vehicle></bbva-data-info-vehicle>
```

##styling-doc

@customElement bbva-data-info-vehicle
*/
export class BbvaDataInfoVehicle extends LitElement {
  static get is() {
    return 'bbva-data-info-vehicle';
  }

  // Declare properties
  static get properties() {
    return {
      yearFabr: { type: Array, },
      disabledA: {type:Boolean, attribute: 'status'},
      disabledB: {type:String, attribute: 'status2'},
      marcas: {type:Array},
      modelos: {type:Array}

    };
  }

  // Initialize properties
  constructor() {
    super();
    this.yearFabr = ['2016','2017','2018','2019','2020','2021','2022'];
    this.disabledA = false;
    this.disabledB = "false";
    this.marcas = ['Suzuki','Toyota','Chevrolet'];
    this.modelos = ['Modelo A','Modelo B','Modelo C'];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('bbva-data-info-vehicle-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <div class="vehicle-container" id="vehicle-container">
        <div class="title-container"><h2>Completa los datos del vehículo</h2></div>
        <div class="search-container">
          <bbva-web-form-search id='search-placa' label="Número de Placa (opcional)" value="" ?disabled=${this.disabledA}></bbva-web-form-search>
        </div>
        <div class="check-container">
          <bbva-web-form-checkbox value="ConfirmarPlaca" @click="${this._actionShow}" ?disabled=${this.disabledA}>No cuenta con un número de placa</bbva-web-form-checkbox>
        </div>
        <div class="predictive-container">
          <bbva-web-form-predictive id="Marcas${this.disabledB}" label="Marcas" .items=${this.marcas}></bbva-web-form-predictive>
          <bbva-web-form-predictive id="Modelos${this.disabledB}" label="Modelo" .items=${this.modelos}></bbva-web-form-predictive>
        </div>
        <div class="year-container">
          <bbva-web-form-select label="Año de Fabricación" info-message="El año de fabricación del auto no debe exceder los 20 años de antiguedad." ?disabled=${this.disabledA}>
              ${this.yearFabr.map((i) => html` <bbva-web-form-option value="${i}">${i}</bbva-web-form-option>`
                )}
          </bbva-web-form-select>
        </div>
        <div class="reference-val">
          <bbva-form-field label="Valor referencial" label-out="Valor referencial del vehículo" required="" ?disabled=${this.disabledA}></bbva-form-field>
        </div>
        <div class="radio-group">
        <bbva-form-radio-group name="radios1" label-out="Vehículo convertido a GLP/GNV" divider="full" two-option="" required="">
          <bbva-form-radio-button value="optionA1">No</bbva-form-radio-button>
          <bbva-form-radio-button value="optionA2">Sí</bbva-form-radio-button>
        </bbva-form-radio-group>
        <bbva-form-radio-group name="radios2" label-out="Mayor circulación del vehículo" divider="full" two-option="" required="">
          <bbva-form-radio-button value="optionB1">En Lima</bbva-form-radio-button>
          <bbva-form-radio-button value="optionB2">En provincias</bbva-form-radio-button>
        </bbva-form-radio-group>
        </div>
      </div>
      
    `;
  }
}
