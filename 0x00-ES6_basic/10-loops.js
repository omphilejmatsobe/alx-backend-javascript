export default function appendToEachArrayValue(array, appendString) {
  const arrayCopy = [];

  for (const idx in array) {
    if (idx < appendString.length) {
      arrayCopy.push(`${appendString[idx]}`);
    }
  }

  return arrayCopy;
}
