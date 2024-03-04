export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [];

  for (const idx in array) {
      arrayCopy.push(appendString + array[idx]);
  }

  return arrayCopy;
}