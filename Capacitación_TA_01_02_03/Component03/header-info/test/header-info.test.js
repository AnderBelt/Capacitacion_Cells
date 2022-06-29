/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../header-info.js';
/* eslint-disable import/no-extraneous-dependencies */
import { spy } from 'sinon';

suite('HeaderInfo', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<header-info></header-info>`);
    await el.updateComplete;
  });

  const cargaDataEmpty = () => {
    el.listCoverages = [];
  };

  const cargarData = () => {

    el.title = 'SEGUROS';
    el.nameCustomer = 'MARIELA MILAGROS QUISPE MINAYA';
    el.dni = '12345678';

  }

  test('Select Button History', () => {
    const spyDispatchEvent = spy(el, 'dispatchEvent');

    el.addEventListener('history-quotation', () => {
      assert.isTrue(spyDispatchEvent.calledOnce);
    });
    el.actionHistory();
  });

  test('Select Button Quotation', () => {
    const spyDispatchEvent = spy(el, 'dispatchEvent');

    console.log('Show information', spyDispatchEvent);

    el.addEventListener('new-quotation', () => {
      assert.isTrue(spyDispatchEvent.calledOnce);
    });

    el.actionQuotation();
  });

  test('updated test actionHistory ', async () => {
    await el.updateComplete;
    el.actionHistory();
  });

  test('updated test actionQuotation ', async () => {
    await el.updateComplete;
    el.actionQuotation();
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
