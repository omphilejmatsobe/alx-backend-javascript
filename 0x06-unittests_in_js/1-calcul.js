function calculateNumber(type, a, b){

    const A = Math.round(a);
    const B = Math.round(b);
    let result = 0;

    switch (type) {
    case 'SUM':
	result = A + B;
	break;
    case 'SUBTRACT':
	result = A - B;
	break;
    case 'DIVIDE':
      if (B === 0) {
            result = "Error";
      } else {
            result = A / B;
      }
      break;
    }
    return result;
}
module.exports = calculateNumber;
