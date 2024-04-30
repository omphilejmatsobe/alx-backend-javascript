const fs = require('fs');

const countStudents = (path) =>{
  try {

    const info = fs.readFileSync(path, { encoding: 'utf8' }).split(/\r?\n/);
    const fileLines = info;

    let x = 0;
    let studentCount = 0;
    const fields = {};

    for (const line of fileLines) {
      if (line.trim() !== '' && x > 0) {
        studentCount += 1;
				const [fname, lname, age, field] = line.split(','); // eslint-disable-line
        if (!fields[field]) {
          fields[field] = {
            count: 1,
            students: [fname],
          };
        } else {
          const newCount = fields[field].count + 1;
          const newStudents = (fields[field].students).concat(fname);
          fields[field] = {
            count: newCount,
            students: newStudents,
          };
        }
      }
      x += 1;
    }

    console.log(`Number of students: ${studentCount}`);
    for (const field of Object.keys(fields)) {
      const fieldCount = fields[field].count;
      const names = fields[field].students.join(', ');

      // console.log(`Number of students in ${field}: ${n}. List: ${names}`);
      console.log(`Number of students in ${field}: ${fieldCount}. List: ${names}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;