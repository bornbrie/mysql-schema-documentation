const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(express.json());
app.use(cors())

var routes = require('./src/router');
app.use('/', routes);

app.listen(port, () => {
    console.log(`Schema Server app listening on port ${port}!`);
});