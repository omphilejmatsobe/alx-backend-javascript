const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const _array = new Int8Array(buffer);

  if (position > _array.length) throw new Error('Position outside range');
  _array[position] = value;
  return new DataView(buffer);
};

export default createInt8TypedArray;
