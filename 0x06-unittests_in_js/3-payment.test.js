const { describe, it } = require('mocha');
const sinon = require('sinon');
const assert = require('assert');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('checks for Utils.calculateNumber call', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(50, 24.52);

    assert(spy.calledOnce);
    spy.restore();
  });
});
