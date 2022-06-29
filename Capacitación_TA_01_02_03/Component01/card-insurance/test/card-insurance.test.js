/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../card-insurance.js';
/* eslint-disable import/no-extraneous-dependencies */
import { spy } from 'sinon';

suite('CardInsurance', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<card-insurance></card-insurance>`);
    await el.updateComplete;
  });

  const cargaDataEmpty = () => {
    el.listCoverages = [];
  };

  const cargarData = () => {
    el.title = 'Seguro Vehicular';
    el.description = 'BBVA y Rímac Seguros se han unido para ofrecer a nuestros clientes los siguientes beneficios al contratar un seguro vehicular: ';
    el.listInfo = [
      {
        icon: "bullet", 
        description: "Elegir entre 3 planes de protección para su vehículo."
        },
        {
        icon: "bullet", 
        description: "Cobertura contra robo total."
        },
        {
        icon: "bullet", 
        description: "Cobertura contra daños a terceros."
        },
        {
        icon: "bullet", 
        description: "Auxilio mecánico y traslado de grúa."
        },
        {
        icon: "bullet", 
        description: "Descuento en gasolina Repsol."
        },
    ];
  } 

  const detail = {"title": "title"}

  test('Select Button Cotizar', () => {
    const spyDispatchEvent = spy(el, 'dispatchEvent');

    el.addEventListener('name-insurance-event', () => {
      assert.isTrue(spyDispatchEvent.calledOnce);
    });
    el.actionInsurance();
  });
  
  test('updated test with empty data', async () => {
    cargaDataEmpty();
    await el.updateComplete;
  });

  test('updated test actionInsurance ', async () => {
    await el.updateComplete;
    el.actionInsurance();
  });

  test('testing rendering with charge data', async () => {
    cargarData();
    await el.updateComplete;
  });

  test('When we use show considerations link', async () => {
    await el.updateComplete;
    const detail = {
      path: [
        {},
        {},
        {},
        {},
        {},
        {
          innerText: 'verconsideraciones',
        },
      ],
    };
    console.log(el.actionInsurance(detail));
    el.actionInsurance(detail);
  });

});
