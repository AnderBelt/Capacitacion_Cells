/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../bbva-data-info-vehicle.js';

suite('BbvaDataInfoVehicle', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<bbva-data-info-vehicle></bbva-data-info-vehicle>`);
    await el.updateComplete;
  });

  const cargaDataEmpty = () => {
    el.listCoverages = [];
  };

  const cargarData = () => {
    el.yearFabr = ['2016','2017','2018','2019','2020','2021','2022'];
    el.disabledA = false;
    el.disabledB = "false";
    el.marcas = ['Suzuki','Toyota','Chevrolet'];
    el.modelos = ['Modelo A','Modelo B','Modelo C'];
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
