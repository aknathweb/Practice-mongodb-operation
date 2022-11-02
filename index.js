const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 5000;

// middle wire
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server Test Running');
});

app.listen(port, () => {
    console.log(`Listening port ${port}`);
});
