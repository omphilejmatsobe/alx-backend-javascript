function calculateNumber(type, a, b) {
  const A = Math.round(a);
  const B = Math.round(b);
  let res = 0;

  switch (type) {
    case 'SUM':
      res = A + B;
      break;
    case 'SUBTRACT':
      res = A - B;
      break;
    case 'DIVIDE':
      if (B === 0) {
        res = 'Error';
      } else {
        res = A / B;
      }
      break;
  }
  return res;
}

module.exports = calculateNumber;
