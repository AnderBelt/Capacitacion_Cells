/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../checkbox-button.js';
/* eslint-disable import/no-extraneous-dependencies */
import { spy } from 'sinon';

suite('CheckboxButton', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<checkbox-button></checkbox-button>`);
    await el.updateComplete;
  });

  const cargaDataEmpty = () => {
    el.listCoverages = [];
  };

  const cargarData = () => {
    el.listItems = [{
      'number' : '1',
      'item' :'Item 1'}, 
      {
      'number' : '2',
      'item' :'Item 2'},
      {
        'number' : '3',
        'item' :'Item 3'},];
  }
  
  test('Select New Button', () => {
    const spyDispatchEvent = spy(el, 'dispatchEvent');

    el.addEventListener('check-event', () => {
      assert.isTrue(spyDispatchEvent.calledOnce);
    });
    el._actionShowOptions();
  });

  test('updated test with empty data', async () => {
    cargaDataEmpty();
    await el.updateComplete;
  });

  test('updated test actionShowOptions ', async () => {
    await el.updateComplete;
    el._actionShowOptions();
  });

  test('updated test actionShowButton ', async () => {
    await el.updateComplete;
    el._actionShowButton();
  });

  test('updated test actionShowButton false', async () => {
    await el.updateComplete;

    let boxes = el.shadowRoot.querySelectorAll('bbva-web-form-checkbox');

    boxes.forEach((item) => {
       item.setAttribute('aria-checked', 'true');    
    });

    el._actionShowButton();
  });

  test('testing rendering with charge data', async () => {
    cargarData();
    await el.updateComplete;
  });

});
