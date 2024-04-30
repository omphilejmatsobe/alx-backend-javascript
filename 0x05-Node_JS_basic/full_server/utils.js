import fs from 'fs';

const readDatabase = (dataPath) => new Promise((resolve, reject) => {

  if (!dataPath) {
    reject(new Error('Cannot load the database'));
  }

  if (dataPath) {
    fs.readFile(dataPath, (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      }
      if (data) {
        const Lines = data
          .toString('utf-8')
          .trim()
          .split('\n');
        const group = {};
        const Fields = Lines[0].split(',');
        const studentPropNames = Fields
          .slice(0, Fields.length - 1);

        for (const line of Lines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord
            .slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];
          if (!Object.keys(Group).includes(field)) {
            Group[field] = [];
          }
          const studentEntries = studentPropNames
            .map((propName, idx) => [propName, studentPropValues[idx]]);
          Group[field].push(Object.fromEntries(studentEntries));
        }
        resolve(Group);
      }
    });
  }
});

export default readDatabase;
module.exports = readDatabase;