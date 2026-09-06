const express = require('express');
const app = express();
const logger = require('./middlewere/logger');
app.use(logger);

app.get('/', logger, (req, res) => {
    res.json({ message: 'Hello PostMan' });
});


const port = 3000;

app.listen(port , () => {
    console.log('Server is running on port ' + port);
});