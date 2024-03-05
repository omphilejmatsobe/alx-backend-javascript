export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [];

  for (const idx of array) {
    arrayCopy.push(`${appendString}${idx}`);
  }

  return arrayCopy;
}
