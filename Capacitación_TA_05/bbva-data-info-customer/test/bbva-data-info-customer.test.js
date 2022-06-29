/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../bbva-data-info-customer.js';
/* eslint-disable import/no-extraneous-dependencies */
import { spy } from 'sinon';

suite('BbvaDataInfoCustomer', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<bbva-data-info-customer></bbva-data-info-customer>`);
    await el.updateComplete;
  });

  const cargaDataEmpty = () => {
    el.listCoverages = [];
  };

  const cargarData = () => {
    el.numberCustomer = ['985452478','963852741','951753486'];
    el.emailCustomer = ['marquis@gmail.com','andbel@gmail.com','tuias@gmail.com'];
  }

  test('updated test with empty data', async () => {
    cargaDataEmpty();
    await el.updateComplete;
  });

  test('testing rendering with charge data', async () => {
    cargarData();
    await el.updateComplete;
  });

  test('Select Agregar Telefono y Operador', () => {
    const spyDispatchEvent = spy(el, 'dispatchEvent');

    el.addEventListener('number-event', () => {
      assert.isTrue(spyDispatchEvent.calledOnce);
    });
    el._actionShowTelephone();
  });

  test('Select Agregar Email', () => {
    const spyDispatchEvent = spy(el, 'dispatchEvent');

    el.addEventListener('email-event', () => {
      assert.isTrue(spyDispatchEvent.calledOnce);
    });
    el._actionShowEmail();
  });

  test('updated test actionShowNumber ', async () => {
    await el.updateComplete;
    el._actionShowTelephone();
  });

  test('updated test actionShowEmail ', async () => {
    await el.updateComplete;
    el._actionShowEmail();
  });


});
