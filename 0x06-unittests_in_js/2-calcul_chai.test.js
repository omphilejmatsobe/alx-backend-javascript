const { expect } = require('chai');
const { describe, it } = require('mocha');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('check if rounds', () => {
	    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
    });
    it('check if rounds', () => {
	    expect(calculateNumber('SUM', 1.6, 2.6)).to.equal(5);
    });
  });
  describe('sUBTRACT', () => {
    it('checking if rounds', () => {
	    expect(calculateNumber('SUBTRACT', 1.4, 2.3)).to.equal(-1);
    });
    it('checking if number rounds', () => {
	    expect(calculateNumber('SUBTRACT', 4.9, 2.7)).to.equal(2);
    });
    it('checking if number rounds', () => {
	    expect(calculateNumber('SUBTRACT', -4.9, -2.7)).to.equal(-2);
    });
  });
  describe('dIVIDE', () => {
    it('check if number rounds', () => {
	    expect(calculateNumber('DIVIDE', 4, 2)).to.equal(2);
    });
    it('check if number rounds', () => {
	    expect(calculateNumber('DIVIDE', 4.6, 1.8)).to.equal(2.5);
    });
    it('check if number rounds', () => {
	    expect(calculateNumber('DIVIDE', 4, 0)).to.equal('Error');
    });
  });
});
