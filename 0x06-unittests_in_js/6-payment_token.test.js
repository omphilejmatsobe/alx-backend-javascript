const getPaymentTokenFromAPI = require("./6-payment_token");
const {describe, it} = require("mocha");
const res = require("chai").expect;

describe("getPaymentTokenFromAPI", function() {
    it("Async test complete callback", function(done) {
	getPaymentTokenFromAPI(true)
	    .then((data) => {
		res(data).to.have.property('data');
		done();
	    });
    });
});
