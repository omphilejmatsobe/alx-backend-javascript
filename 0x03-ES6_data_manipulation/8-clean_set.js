const cleanSet = (set, startString) => {
  const stringArr = [];

  if (startString === '' || typeof startString !== 'string') return '';

  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      stringArr.push(s.slice(startString.length));
    }
  });
  return stringArr.join('-');
};

export default cleanSet;
