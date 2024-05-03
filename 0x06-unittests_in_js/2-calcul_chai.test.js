const expect = require("chai").expect;
const {describe, it} = require("mocha");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function() {
    describe("SUM", function() {
	it("check if rounds", function() {
	    expect(calculateNumber("SUM", 1, 2)).to.equal(3);
	});
	it("check if rounds", function() {
	    expect(calculateNumber("SUM", 1.6, 2.6)).to.equal(5);
	});
    });
    describe("SUBTRACT", function() {
	it("checking if rounds", function() {
	    expect(calculateNumber("SUBTRACT", 1.4, 2.3)).to.equal(-1);
	});
	it("checking if number rounds", function() {
	    expect(calculateNumber("SUBTRACT", 4.9, 2.7)).to.equal(2);
	});
	it("checking if number rounds", function() {
	    expect(calculateNumber("SUBTRACT", -4.9, -2.7)).to.equal(-2);
	});
    });
    describe("DIVIDE", function() {
	it("check if number rounds", function() {
	    expect(calculateNumber("DIVIDE", 4, 2)).to.equal(2);
	});
	it("check if number rounds", function() {
	    expect(calculateNumber("DIVIDE", 4.6, 1.8)).to.equal(2.5);
	});
	it("check if number rounds", function() {
	    expect(calculateNumber("DIVIDE", 4, 0)).to.equal("Error");
	});
    });
});
