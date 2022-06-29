/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../country-flags.js';
/* eslint-disable import/no-extraneous-dependencies */
import { spy } from 'sinon';

suite('CountryFlags', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<country-flags></country-flags>`);
    await el.updateComplete;
  });

  const cargaDataEmpty = () => {
    el.listCoverages = [];
  };

  const cargarData = () => {
    el.flag = 'Brasil'
  }

  test('Mostrar bandera', () => {
    const spyDispatchEvent = spy(el, 'dispatchEvent');

    el.addEventListener('flags-event', () => {
      assert.isTrue(spyDispatchEvent.calledOnce);
    });
    el._actionFlags();
  });

  test('updated test actionFlags ', async () => {
    await el.updateComplete;
    el._actionFlags();
  });

  test('updated test with empty data', async () => {
    cargaDataEmpty();
    await el.updateComplete;
  });

  test('testing rendering with charge data', async () => {
    cargarData();
    await el.updateComplete;
  });

});
