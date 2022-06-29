/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../list-card-insurance.js';
/* eslint-disable import/no-extraneous-dependencies */
import { spy } from 'sinon';

suite('ListCardInsurance', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<list-card-insurance></list-card-insurance>`);
    await el.updateComplete;
  });

  const cargaDataEmpty = () => {
    el.listCoverages = [];
  };

  const cargarData = () => {
    el.listCard = [
      {
        title: 'Seguro Vehicular', 
        description: 'BBVA y Rímac Seguros se han unido para ofrecer a nuestros clientes los siguientes beneficios al contratar un seguro vehicular: ', 
        listInfo: [
          {
            icon: 'bullet', 
            description: 'Elegir entre 3 planes de protección para su vehículo.'
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
        ], 
        buttonName: 'Cotizar'
      },
      {
        title: 'Seguro Particular', 
        description: 'BBVA y Rímac Seguros se han unido para ofrecer a nuestros clientes los siguientes beneficios al contratar un seguro vehicular: ', 
        listInfo: [
          {
            icon: 'bullet', 
            description: 'Elegir entre 3 planes de protección para su vehículo.'
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
        ], 
        buttonName: 'Cotizar'
      },
      {
        title: 'Seguro de Vida', 
        description: 'BBVA y Rímac Seguros se han unido para ofrecer a nuestros clientes los siguientes beneficios al contratar un seguro vehicular: ', 
        listInfo: [
          {
            icon: 'bullet', 
            description: 'Elegir entre 3 planes de protección para su vehículo.'
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
        ], 
        buttonName: 'Cotizar'
      },
      {
        title: 'Seguro de Vida', 
        description: 'BBVA y Rímac Seguros se han unido para ofrecer a nuestros clientes los siguientes beneficios al contratar un seguro vehicular: ', 
        listInfo: [
          {
            icon: 'bullet', 
            description: 'Elegir entre 3 planes de protección para su vehículo.'
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
        ], 
        buttonName: 'Cotizar'
      },
    ];
  }

  const detail = { "detail" : "title"}

  test('Select Card', () => {
    const spyDispatchEvent = spy(el, 'dispatchEvent');

    el.addEventListener('list-insurance-event', () => {
      assert.isTrue(spyDispatchEvent.calledOnce);
    });
    el.selectCard(detail);
  });

  test('updated Select Card ', async () => {
    await el.updateComplete;
    el.selectCard(detail);
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
