/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../bbva-data-options.js';
/* eslint-disable import/no-extraneous-dependencies */
import { spy } from 'sinon';

suite('BbvaDataOptions', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<bbva-data-options></bbva-data-options>`);
    await el.updateComplete;
  });

  const cargaDataEmpty = () => {
    el.listCoverages = [];
  };

  const cargarData = () => {
    el.listOptions = [{
      'number' : '1', 
      'option' : 'Es de uso exclusivamente particular (no para servicio de taxi).'},
      {
      'number' : '2', 
      'option' : 'No tiene timón cambiado.'}];

  }

  test('updated test with empty data', async () => {
    cargaDataEmpty();
    await el.updateComplete;
  });

  test('testing rendering with charge data', async () => {
    cargarData();
    await el.updateComplete;
  });

});
