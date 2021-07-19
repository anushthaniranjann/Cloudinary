const express = require('express');

const app = express();

const port = 6000;

app.use(express.json());

app.listen(port, () => {
    console.log("Server is running at " + port);
});