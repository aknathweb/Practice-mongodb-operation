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

/* 
Mongodb:
User: anik
password: U@.98H9jivtMKAC
*/
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://anik:U@.98H9jivtMKAC@cluster0.7wt8nwb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});