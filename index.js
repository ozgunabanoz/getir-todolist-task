require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');

let mongoose = require('./db/mongoose');
require('./models/todos');
const app = express();

app.use(bodyParser.json());

require('./routes/todoRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, 'client', 'build', 'index.html')
    );
  });
}

app.listen(process.env.PORT, () => {
  console.log(`Server listening at ${process.env.PORT}`);
});
