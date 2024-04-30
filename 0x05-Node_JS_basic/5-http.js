const http = require('http');
const countStudents = require('./3-read_file_async');

const host = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let list = 'This is the list of our students\n';
    await countStudents(process.argv[2])
      .then((msg) => {
        list += msg;
        res.end(list);
      })
      .catch((err) => {
        list += err.message;
        res.end(list);
      });
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
