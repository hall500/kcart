const express = require('express');
const app = express();

/* Routes */
const users = require('./models/users');

app.get('/', (req, res) => {
    res.send("Welcome");
});

app.use('/api/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`The server is running on ${port}`));